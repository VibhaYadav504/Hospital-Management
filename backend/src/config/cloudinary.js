import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';


cloudinary.config({
    cloud_name: "dl1lyatxr",
    api_key: "464646712244688",
    api_secret: "rh8EBMcopkeBYV5BM8eYe36SBmI",
});

export const uploadToCloudinary = (fileBuffer, options = {}) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: "auto", ...options },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
        Readable.from(fileBuffer).pipe(uploadStream);
    });
};

export default cloudinary;