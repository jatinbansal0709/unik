import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, 'public/images');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const productId = req.body.productId;
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        // Add random string to ensure uniqueness for multiple files uploaded at once
        const uniqueSuffix = Math.round(Math.random() * 1E9);
        cb(null, `${productId}-${timestamp}-${uniqueSuffix}${ext}`);
    }
});

const upload = multer({ storage: storage });

// Upload Endpoint
app.post('/api/upload', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'video', maxCount: 1 }]), (req, res) => {
    try {
        const { productId } = req.body;
        const files = req.files;

        console.log(`Received upload request for Product ID: ${productId}`);
        console.log('Files received:', files);

        if (!files || (Object.keys(files).length === 0)) {
            console.log('No files found in request.');
            return res.status(400).send('No files uploaded.');
        }

        const productsFilePath = path.join(__dirname, 'src/data/products.js');
        let productsFileContent = fs.readFileSync(productsFilePath, 'utf8');
        let updated = false;

        // Handle Images
        if (files['images']) {
            const newImagePaths = files['images'].map(file => `/images/${file.filename}`);
            console.log('New Image Paths:', newImagePaths);

            // Regex to find the images array: images: [ ... ]
            const imagesRegex = new RegExp(`(id:\\s*['"]${productId}['"][\\s\\S]*?images:\\s*\\[)([\\s\\S]*?)(\\])`, 'g');

            if (imagesRegex.test(productsFileContent)) {
                console.log('Images Regex matched!');
                productsFileContent = productsFileContent.replace(imagesRegex, (match, prefix, content, suffix) => {
                    const hasItems = content.trim().length > 0;
                    const separator = hasItems ? ',' : '';
                    const newContent = newImagePaths.map(p => `'${p}'`).join(', ');
                    return `${prefix}${content}${separator} ${newContent}${suffix}`;
                });
                updated = true;
            } else {
                console.log('Images Regex DID NOT match.');
            }
        }

        // Handle Video
        if (files['video']) {
            const videoPath = `/images/${files['video'][0].filename}`;
            console.log('New Video Path:', videoPath);

            // Check if video field exists
            const videoFieldRegex = new RegExp(`(id:\\s*['"]${productId}['"][\\s\\S]*?)(video:\\s*['"][^'"]*['"],?)`, 'g');
            const productStartRegex = new RegExp(`(id:\\s*['"]${productId}['"][\\s\\S]*?)(\\})`, 'g');

            if (videoFieldRegex.test(productsFileContent)) {
                console.log('Video Field Regex matched (updating existing).');
                productsFileContent = productsFileContent.replace(videoFieldRegex, `$1video: '${videoPath}',`);
                updated = true;
            } else if (productStartRegex.test(productsFileContent)) {
                console.log('Product Start Regex matched (adding new video field).');
                productsFileContent = productsFileContent.replace(productStartRegex, `$1    video: '${videoPath}',\n$2`);
                updated = true;
            } else {
                console.log('Video Regex DID NOT match.');
            }
        }

        if (updated) {
            fs.writeFileSync(productsFilePath, productsFileContent, 'utf8');
            console.log(`Successfully updated products.js for ${productId}`);
            res.json({ success: true, message: 'Upload successful' });
        } else {
            console.warn(`Product ID ${productId} not found or update failed.`);
            res.json({ success: true, warning: 'Files uploaded but code update failed.' });
        }

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Upload server running on http://localhost:${PORT}`);
});
