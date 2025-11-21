import React, { useState, useRef } from 'react';
import { Camera, Loader2, Check, AlertCircle } from 'lucide-react';

const QuickUpload = ({ productId, onUploadSuccess, className = "" }) => {
    const [status, setStatus] = useState('idle'); // idle, uploading, success, error
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            await uploadFile(file);
        }
    };

    const uploadFile = async (file) => {
        setStatus('uploading');
        const formData = new FormData();
        formData.append('productId', productId);
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                if (onUploadSuccess) onUploadSuccess(data.imagePath);

                // Reset after 2 seconds
                setTimeout(() => {
                    setStatus('idle');
                }, 2000);
            } else {
                setStatus('error');
                console.error(data.warning);
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            console.error(error);
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleClick = (e) => {
        e.preventDefault(); // Prevent navigation if inside a Link
        e.stopPropagation();
        fileInputRef.current.click();
    };

    return (
        <div className={`relative z-50 ${className}`}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            <button
                onClick={handleClick}
                disabled={status === 'uploading'}
                className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 border-2 border-white transform hover:scale-105 ${status === 'idle' ? 'bg-red-600 text-white hover:bg-red-700' :
                        status === 'uploading' ? 'bg-gray-600 text-gray-300' :
                            status === 'success' ? 'bg-green-600 text-white' :
                                'bg-red-800 text-white'
                    }`}
                title="Quick Upload Image"
            >
                {status === 'idle' && <Camera size={18} />}
                {status === 'uploading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'success' && <Check size={18} />}
                {status === 'error' && <AlertCircle size={18} />}

                <span className="font-bold text-xs uppercase tracking-wider">
                    {status === 'idle' ? 'Upload' :
                        status === 'uploading' ? '...' :
                            status === 'success' ? 'Done' : 'Error'}
                </span>
            </button>
        </div>
    );
};

export default QuickUpload;
