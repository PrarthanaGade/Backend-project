import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' }); // Temporary storage for files

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
});

// Upload media code

const uploadCloudinary = async (localFilepath) => {
    try {
        if (!localFilepath) return null
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto"
        })
        console.log("file is uploaded successfully !", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilepath)
        return null;
    }
}
// Start the Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export {uploadCloudinary}
