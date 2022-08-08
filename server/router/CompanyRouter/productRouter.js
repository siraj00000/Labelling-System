const productRouter = require("express").Router();
const {
    insertProduct,
    fetchProducts,
    updateProduct,
    deleteProduct,
    generateCSV,
    fetchProductById,
    updateProductImages
} = require("../../controller/CompanyCtrl/productCtrl");

productRouter
    .post('/insert-product', insertProduct)
    .get('/fetch-product', fetchProducts)
    .get('/fetch-product/:id', fetchProductById)
    .get('/generate-product-csv', generateCSV)
    .put('/update-product/:id', updateProduct)
    .put('/update-product-image/:id', updateProductImages)
    .delete('/delete-product/:id', deleteProduct)
    
module.exports = productRouter;