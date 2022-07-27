const brandRouter = require("express").Router();

const { fetchBrands, insertBrand, updateBrandInfo, deleteBrand, updateImages, generateCSV } = require("../controller/brandCtrl");
const { protect } = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

brandRouter.post('/insert-brand', protect, authAdmin, insertBrand);
brandRouter.get('/fetch-brands', protect, authAdmin, fetchBrands);
brandRouter.put('/update-brand/:id', protect, authAdmin, updateBrandInfo);
brandRouter.delete('/delete-brand/:id', protect, authAdmin, deleteBrand);
brandRouter.put('/update-image/:id', protect, authAdmin, updateImages);
brandRouter.get('/generate-brand-csv', protect, authAdmin, generateCSV);

module.exports = brandRouter;