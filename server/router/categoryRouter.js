const categoryRouter = require("express").Router();
const { fetchCategory, insertCategory, deleteCategory, updateCategory } = require("../controller/categoryCtrl");
const { protect } = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

categoryRouter.get('/category', protect, authAdmin, fetchCategory);
categoryRouter.post('/insert-category', protect, authAdmin, insertCategory);
categoryRouter.delete('/delete-category/:id', protect, authAdmin, deleteCategory);
categoryRouter.put('/update-category/:id', protect, authAdmin, updateCategory);

module.exports = categoryRouter