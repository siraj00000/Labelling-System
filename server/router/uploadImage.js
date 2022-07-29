// const uploadRouter = require('express').Router();
// const upload = require('../multer');
// const cloudinary = require('../cloudinary');
// const fs = require("fs");
// const ErrorResponse = require('../utils/errorResponse');

// uploadRouter.post('/upload',  async (req, res, next) => {
//     console.log('req.files', req.file);
//     try {
//         const uploader = async (path) => await cloudinary.uploads(path, "Image");

//         let urls = [];
//         const files = req.files.image;
//         console.log('req.files', req.files);
//         for (const file of files) {
//             const { path } = file;

//             const newPath = await uploader(path);

//             urls.push(newPath);

//             fs.unlinkSync(path);
//         }

//         res.status(200).json({
//             succes: true,
//             msg: "Images Uploaded Successfully",
//             data: urls
//         });

//     } catch (error) {
//         next(new ErrorResponse("Images not uploaded successfully", 405));
//     }
// });

// module.exports = uploadRouter;












const uploadRouter = require('express').Router();
const { protect } = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const upload = require('../multer');
const fs = require("fs");
const ErrorResponse = require('../utils/errorResponse');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

uploadRouter.post("/upload", async (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");

    console.log('Request1', req.files.image);
    try {
        // let { imageList } = req.body;
        let imageUrlList = [];
        let _file = req.files.image;

        // if (!imageList) return next(new ErrorResponse("Image not found!", 400));
        /**
         * if condition will execute when there is single image
         * else condition will execute multiple image
         */
        const isList = Array.isArray(_file);

        if (!isList) {
            verifyImageSizaAndtype(_file, next);
            const result = await uploadImage(_file);
            imageUrlList.push(result);
        } else {
            for (var i = 0; i < req.files.image.length; i++) {
                var file = req.files.image[i];
                verifyImageSizaAndtype(file, next);
                const result = await uploadImage(file);
                imageUrlList.push(result.url);
            }
        }

        res.status(201).json({
            success: true,
            msg: "Uploaded",
            data: imageUrlList
        });
    } catch (error) {
        next(error);
    }
});

uploadRouter.post("/video", async (req, res, next) => {
    try {
        let video = req.files.video;
        // res.status(200).json({video})
        cloudinary.uploader.upload(video.tempFilePath,
            {
                resource_type: "video",
                folder: "label",
                chunk_size: 15000000,
                eager: [
                    { width: 300, height: 300 },
                    { width: 160, height: 100, gravity: "south" }],
                eager_async: true,
                eager_notification_url: "http://35.92.20.94/brands",
                notification_url: "http://35.92.20.94/brands"
            },
            function (error, result) {
                console.log(result, error);
                removeTmp(video.tempFilePath);
                if (result) res.status(200).json({ data: result });
            });

    } catch (error) {
        next(error);
    }
});


const uploadVideo = (video) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(video.name,
            {
                resource_type: "video",
                public_id: "label/label-video",
                chunk_size: 6000000,
                eager: [
                    { width: 300, height: 300, crop: "pad", audio_codec: "none" },
                    { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" }],
                eager_async: true,
            }, async (err, result) => {
                console.log(err, result);
                if (err) reject(err);
                resolve({ public_id: result.public_id, url: result.secure_url });
            });
    });
};

const removeTmp = (path) => {
    fs.unlinkSync(path);
};

const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.tempFilePath, { folder: 'label' }, async (err, result) => {
            if (err) throw err;
            removeTmp(file.tempFilePath);
            resolve({ public_id: result.public_id, url: result.secure_url });
        });
    });
};

const verifyImageSizaAndtype = async (file, next) => {
    // 1024*1024 = 1mb
    // file must be less than 1mb
    if (file.size > 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return next(new ErrorResponse("Size too large", 400));
    }

    // file format must be jpeg or png
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
        return next(new ErrorResponse("Incorrect file format", 400));
    }
};

module.exports = uploadRouter;











// // const uploadRouter = require('express').Router();
// // const ErrorResponse = require('../utils/errorResponse');
// // const cloudinary = require('cloudinary').v2;
// // const fs = require('fs');
// // const upload = require('../multer');
// // const uploadToCloudinary = require('../config/cloudinary');

// // cloudinary.config({
// //     cloud_name: process.env.CLOUD_NAME,
// //     api_key: process.env.CLOUDINARY_API_KEY,
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// //     secure: true
// // });

// // uploadRouter.post("/upload", upload.array("img", 4),
// //     async (req, res, next) => {
// //         try {
// //             console.log('running.......');
// //             // req.body is array of `brand-images` files
// //             // req.body will contain the text fields,
// //             // if there were any
// //             var imageUrlList = [];

// //             for (var i = 0; i < req.body.length; i++) {
// //                 var locaFilePath = req.body[i].path;
// //                 console.log(locaFilePath);
// //                 // Upload the local image to Cloudinary
// //                 // and get image url as response
// //                 var result = await uploadToCloudinary(locaFilePath);
// //                 imageUrlList.push(result.url);
// //             }

// //             return res.status(201).json({
// //                 success: true,
// //                 data: imageUrlList
// //             });
// //         } catch (error) {
// //             next(error);
// //         }
// //     });

// // module.exports = uploadRouter;