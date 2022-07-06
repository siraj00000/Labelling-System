const SubCategory = require("../model/subcategorySchema");
const Category = require("../model/categorySchema");
const ErrorResponse = require("../utils/errorResponse");

const subCategoryCtrl = {
    insertSubCategory: async (req, res, next) => {
        const { parent_category_id, sub_category, sub_category_active_status, feature } = req.body;

        const category = await Category.findById({ _id: parent_category_id });

        if (!category) return next(new ErrorResponse("Invalid category", 404));

        try {
            await SubCategory.create({
                parent_category_id,
                category_name: category.category_name,
                sub_category,
                sub_category_active_status,
                feature
            });

            res.status(201).json({
                success: true,
                msg: "Sub-Category has been created!"
            });
        } catch (error) {
            next(error);
        }
    },
    fetchSubCategory: async (req, res, next) => {
        try {
            const subCategory = await SubCategory.find();

            res.status(200).json({
                success: true,
                data: subCategory,
            });
        } catch (error) {
            next(error);
        }
    },
    updateSubCategory: async (req, res, next) => {
        try {
            const { sub_category_active_status } = req.body;
            const { id } = req.params;

            const category = await Category.findById({ _id: req.body?.parent_category_id });

            if (!category) return next(new ErrorResponse("Invalid category", 404));

            await SubCategory.findByIdAndUpdate(id, { sub_category_active_status }, { new: true });

            return res.status(201).json({
                success: true,
                msg: "Sub-Category update!"
            });
        } catch (error) {
            next(error);
        }
    },
    deleteSubCategory: async (req, res, next) => {
        try {
            const { id } = req.params;
            await SubCategory.where({ _id: id }).findOneAndDelete();

            res.status(200).json({
                success: true,
                data: "Sub-Category deleted!"
            });
        } catch (error) {
            next(error);
        }
    }
};
module.exports = subCategoryCtrl;