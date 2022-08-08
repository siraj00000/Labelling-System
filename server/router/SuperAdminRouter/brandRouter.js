const brandRouter = require("express").Router();
const { protect } = require("../../middleware/auth");
const authAdmin = require("../../middleware/authAdmin");
const {
    fetchBrands,
    insertBrand,
    updateBrandInfo,
    deleteBrand,
    updateImages,
    generateCSV,
    fetchSpecificBrand,
    fetchBrandByEmail
} = require("../../controller/SuperAdminCtrl/brandCtrl");

brandRouter.post('/insert-brand', protect, authAdmin, insertBrand);
brandRouter.get('/fetch-brands', protect, authAdmin, fetchBrands);
brandRouter.get('/fetch-brand-by-email', protect, fetchBrandByEmail);
brandRouter.get('/fetch-brands/:id', protect, authAdmin, fetchSpecificBrand);
brandRouter.put('/update-brand/:id', protect, authAdmin, updateBrandInfo);
brandRouter.delete('/delete-brand/:id', protect, authAdmin, deleteBrand);
brandRouter.put('/update-image/:id', protect, authAdmin, updateImages);
brandRouter.get('/generate-brand-csv', protect, authAdmin, generateCSV);

module.exports = brandRouter;