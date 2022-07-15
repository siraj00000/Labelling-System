const companyAdminRouter = require("express").Router();
const { protect } = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const { insertCompanyAdminDetail, updateCompanyAdminDetail, deleteCompanyAdmin, fetchCompanyAdminDetail, fetchAdmins } = require("../controller/companyAdminCtrl");

companyAdminRouter.post("/insert-company-admin", protect, authAdmin, insertCompanyAdminDetail);
companyAdminRouter.get("/fetch-company-admin", protect, authAdmin, fetchCompanyAdminDetail);
companyAdminRouter.put("/update-company-admin/:id", protect, authAdmin, updateCompanyAdminDetail);
companyAdminRouter.delete("/delete-company-admin/:id", protect, authAdmin, deleteCompanyAdmin);
companyAdminRouter.post("/fetch-admin", protect, authAdmin, fetchAdmins)
module.exports = companyAdminRouter