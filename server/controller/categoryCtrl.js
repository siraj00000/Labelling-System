const Category = require("../model/categorySchema");
const ErrorResponse = require("../utils/errorResponse");

const categoryCtrl = {
    fetchCategory: async (req, res, next) => {
        try {
            const category = await Category.find();

            res.status(200).json({
                success: true,
                data: category,
                msg: "Categories fetched!",

            });
        } catch (error) {
            next(error);
        }
    },
    insertCategory: async (req, res, next) => {
        const { category_name } = req.body;
        try {
            if (!category_name) return next(new ErrorResponse("Please provide category", 401));

            const newCategory = await Category.create(req.body);

            if (newCategory) {
                res.status(201).json({
                    success: true,
                    msg: "Categories created!"
                });
            }
        } catch (error) {
            next(error);
        }
    },
    updateCategory: async (req, res, next) => {
        try {
            const { category_name } = req.body;
            const { id } = req.params;

            if (!category_name) return next(new ErrorResponse("Please provide category", 401));

            const update_category = await Category.findByIdAndUpdate(id, req.body, {
                new: true
            });

            return res.status(201).json({
                success: true,
                data: update_category,
                msg: "Category update!"
            });
        } catch (error) {
            next(error);
        }
    },
    deleteCategory: async (req, res, next) => {
        try {
            const { id } = req.params;
            await Category.where({ _id: id }).findOneAndDelete();

            res.status(200).json({
                success: true,
                data: "Category deleted!"
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = categoryCtrl;