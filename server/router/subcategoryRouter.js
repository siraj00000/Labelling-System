const subCategoryRouter = require("express").Router();
const { protect } = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const { insertSubCategory, fetchSubCategory, updateSubCategory, deleteSubCategory } = require("../controller/subcategoryCtrl");

subCategoryRouter.post("/insert-subcategory", protect, authAdmin, insertSubCategory);
subCategoryRouter.get("/fetch-subcategory", protect, authAdmin, fetchSubCategory);
subCategoryRouter.put("/update-subcategory/:id", protect, authAdmin, updateSubCategory);
subCategoryRouter.delete("/delete-subcategory/:id", protect, authAdmin, deleteSubCategory);

module.exports = subCategoryRouter