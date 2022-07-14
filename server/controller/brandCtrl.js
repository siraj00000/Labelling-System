const { response } = require("express");
const Brand = require("../model/brandSchema");
const CompanyAdmin = require("../model/companyAdminSchema");
const ErrorResponse = require("../utils/errorResponse");
const { uploadImagesToCloudinary, uploadVideoToCloudinary, destroyImageFromCloudinary } = require("../utils/upload");

const brandCtrl = {
    insertBrand: async (req, res, next) => {
        try {
            res.set("Access-Control-Allow-Origin", "http://34.211.164.116");

            //? Parse body data  
            let body = JSON.parse(req.body.reqBody);


            // Note: image and video word must provide as field name 
            let file = req.files.image;
            let video = req.files.video;

            const { company_id, videoURL, emptyVideo } = body;

            //*TODO: find company detail in db according to company_id
            const company = await CompanyAdmin.findById({ _id: company_id });

            //*TODO: if company not found will not processed further
            if (!company) return next(new ErrorResponse("Please provide valid company", 401));

            /**
             * *uploadImagesToCloudinary method response matters
             * @response will provide image link from cloudinary then store in db
             * @error error occurence, will stop to procceed further 
             * */
            const result = await uploadImagesToCloudinary(file, next);
            if (!result || result === 0) return next(new ErrorResponse('Image not uploaded!', 404));

            /**
             * *uploadVideoToCloudinary method response matters
             * @response will provide video link from cloudinary then store in db
             * @error error occurence, will stop to procceed further 
             * */
            if (emptyVideo) {
                body["video_url"] = "";
            } else {
                if (videoURL === '') {
                    const videoUploadRes = await uploadVideoToCloudinary(video, next);
                    if (!videoUploadRes || videoUploadRes === 0) return next(new ErrorResponse('Video not uploaded!', 404));
                    body["video_url"] = videoUploadRes;
                } else {
                    body["video_url"] = { url: videoURL, public_id: '' };
                }
            }

            body["company_name"] = company?.company_name;
            body["image_list"] = result;

            const newBrand = await Brand.create(body);
            if (newBrand) {
                res.status(201).json({
                    success: true,
                    msg: "Brand has been succesfully created!",
                });
            }
        } catch (error) {
            next(error);
        }
    },
    fetchBrands: async (req, res, next) => {
        try {
            const brandList = await Brand.find();
            if (brandList) {
                res.status(200).json({
                    success: true,
                    msg: "Brands Fetched!",
                    data: brandList
                });
            }
        } catch (error) {
            next(error);
        }
    },
    updateBrandInfo: async (req, res, next) => {
        // Note: image and video word must provide as field name in the formData
        try {
            res.set("Access-Control-Allow-Origin", "http://34.211.164.116");

            const { id } = req.params;
            if (!id) return next(new ErrorResponse("Invalid brand entry!", 401));

            //? Parse body data  
            let body = JSON.parse(req.body.reqBody);

            let file = req.files?.image;

            if (file) {
                const result = await uploadImagesToCloudinary(file, next);
                if (!result || result === 0) return next(new ErrorResponse('Image not uploaded!', 404));

                let newImages = [...body.prevImages, ...result];
                body["image_list"] = newImages;

            } else {
                body["image_list"] = body.prevImages;
            }

            /**
            * *uploadVideoToCloudinary method response matters
            * @response will provide video link from cloudinary then store in db
            * @error error occurence, will stop to procceed further 
            * */
            if (body.videoURL === '') {
                let video = req.files.video;
                const videoUploadRes = await uploadVideoToCloudinary(video, next);
                if (!videoUploadRes || videoUploadRes === 0) return next(new ErrorResponse('Video not uploaded!', 404));
                body["video_url"] = videoUploadRes;
            } else {
                body["video_url"] = { url: body.videoURL, public_id: '' };
            }

            const updateBrand = await Brand.findByIdAndUpdate(id, body, { new: true });
            if (updateBrand) {
                res.status(200).json({
                    success: true,
                    msg: "Brand Updated!",
                });
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
    deleteBrand: async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedBrand = await Brand.where({ _id: id }).findOneAndDelete();
            if (deletedBrand) {
                res.status(200).json({
                    success: true,
                    msg: "Brand Deleted!",
                });
            }
        } catch (error) {
            next(error);
        }
    },
    deleteContentFromCloudinary: async (req, res, next) => {
        try {
            const { public_id } = req.body;
            if (!public_id) return next(new ErrorResponse("No image selected", 400));

            destroyImageFromCloudinary(public_id)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            res.status(200).json({
                success: true,
                msg: "Image Deleted!"
            });
        } catch (err) {
            next(err);
        }
    },
    updateImages: async (req, res, next) => {
        try {
            const { public_id } = req.body;
            if (!public_id) return next(new ErrorResponse("Please provide a valid image", 400));

            const { id } = req.params;
            const brand = await Brand.findById(id);

            if (brand) {
                let list = [];
                for (const key in brand.image_list) {
                    if (brand.image_list[key].public_id !== public_id) {
                        let element = brand.image_list[key];
                        list.push(element);
                    }
                }
                req.body["image_list"] = list;
            }

            destroyImageFromCloudinary(public_id)
                .then(async response => {
                    const updatebrand = await Brand.findByIdAndUpdate(id, req.body, { new: true });

                    if (updatebrand) res.status(200).json({
                        success: true,
                        msg: "Image Deleted!"
                    });
                })
                .catch(err => next(err));

        } catch (error) {
            console.log(error);
            next(error);
        }
    }
};

module.exports = brandCtrl;