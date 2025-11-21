import React, { useState } from 'react';
import { products } from '../data/products';
import { Upload, Video, Image as ImageIcon, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const AdminUpload = () => {
    const [selectedProductId, setSelectedProductId] = useState('');
    const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
    const [message, setMessage] = useState('');

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!selectedProductId) {
            setMessage('Please select a product first.');
            return;
        }

        const formData = new FormData();
        formData.append('productId', selectedProductId);

        const imageFiles = e.target.images.files;
        const videoFile = e.target.video.files[0];

        if (imageFiles.length === 0 && !videoFile) {
            setMessage('Please select at least one image or video.');
            return;
        }

        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('images', imageFiles[i]);
        }

        if (videoFile) {
            formData.append('video', videoFile);
        }

        setUploadStatus('uploading');
        setMessage('');

        try {
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setUploadStatus('success');
                setMessage('Upload successful! Refresh the page to see changes.');
                e.target.reset();
                setTimeout(() => setUploadStatus('idle'), 3000);
            } else {
                setUploadStatus('error');
                setMessage(data.warning || 'Upload failed.');
            }
        } catch (error) {
            setUploadStatus('error');
            setMessage('Server error. Ensure server is running on port 3001.');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-unik-black pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-2xl">
                <div className="bg-unik-dark-grey border border-gray-800 rounded-lg p-8 shadow-2xl">
                    <h1 className="text-3xl font-heading font-bold text-white mb-2">Admin Dashboard</h1>
                    <p className="text-gray-400 mb-8">Manage product images and videos.</p>

                    <form onSubmit={handleUpload} className="space-y-8">
                        {/* Product Selection */}
                        <div>
                            <label className="block text-unik-gold text-sm font-bold uppercase tracking-wider mb-2">
                                Select Product
                            </label>
                            <select
                                value={selectedProductId}
                                onChange={(e) => setSelectedProductId(e.target.value)}
                                className="w-full bg-black border border-gray-700 text-white p-4 rounded focus:border-unik-gold focus:outline-none transition-colors"
                                required
                            >
                                <option value="">-- Choose a Product --</option>
                                {products.map((p) => (
                                    <option key={p.id} value={p.id}>
                                        {p.name} ({p.id})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Image Upload */}
                        <div className="border-t border-gray-800 pt-6">
                            <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                <ImageIcon size={18} className="text-unik-red" /> Upload Images
                            </label>
                            <div className="relative group">
                                <input
                                    type="file"
                                    name="images"
                                    multiple
                                    accept="image/*"
                                    className="w-full bg-black border border-gray-700 text-gray-300 p-4 rounded focus:border-unik-red focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-unik-red file:text-white hover:file:bg-red-700 transition-all"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    * Select multiple files to upload at once.
                                </p>
                            </div>
                        </div>

                        {/* Video Upload */}
                        <div className="border-t border-gray-800 pt-6">
                            <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                <Video size={18} className="text-unik-red" /> Upload Video
                            </label>
                            <input
                                type="file"
                                name="video"
                                accept="video/*"
                                className="w-full bg-black border border-gray-700 text-gray-300 p-4 rounded focus:border-unik-red focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-unik-red file:text-white hover:file:bg-red-700 transition-all"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                * Upload a short video loop (MP4, WebM).
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={uploadStatus === 'uploading'}
                            className={`w-full py-4 rounded font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${uploadStatus === 'uploading'
                                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    : 'bg-unik-gold text-black hover:bg-white'
                                }`}
                        >
                            {uploadStatus === 'uploading' ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" /> Uploading...
                                </>
                            ) : (
                                <>
                                    <Upload size={20} /> Upload Assets
                                </>
                            )}
                        </button>

                        {/* Status Messages */}
                        {message && (
                            <div
                                className={`p-4 rounded flex items-center gap-2 ${uploadStatus === 'success'
                                        ? 'bg-green-900/30 text-green-400 border border-green-800'
                                        : uploadStatus === 'error'
                                            ? 'bg-red-900/30 text-red-400 border border-red-800'
                                            : 'bg-blue-900/30 text-blue-400'
                                    }`}
                            >
                                {uploadStatus === 'success' && <CheckCircle size={20} />}
                                {uploadStatus === 'error' && <AlertCircle size={20} />}
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminUpload;
