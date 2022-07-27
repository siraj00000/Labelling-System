const subCategoryRouter = require("express").Router();
const { protect } = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const { insertSubCategory, fetchSubCategory, updateSubCategory, deleteSubCategory, generateCSV } = require("../controller/subcategoryCtrl");

subCategoryRouter.post("/insert-subcategory", protect, authAdmin, insertSubCategory);
subCategoryRouter.get("/fetch-subcategory", protect, authAdmin, fetchSubCategory);
subCategoryRouter.put("/update-subcategory/:id", protect, authAdmin, updateSubCategory);
subCategoryRouter.delete("/delete-subcategory/:id", protect, authAdmin, deleteSubCategory);
subCategoryRouter.get("/generate-csv-subcat", protect, authAdmin, generateCSV);
module.exports = subCategoryRouter;