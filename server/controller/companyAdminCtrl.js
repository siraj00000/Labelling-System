const CompanyAdmin = require("../model/companyAdminSchema");
const ErrorResponse = require("../utils/errorResponse");

const companyAdminDetail = {
    insertCompanyAdminDetail: async (req, res, next) => {
        console.log(req.body);
        try {
            const companyAdminDetail = await CompanyAdmin.create(req.body);

            if (companyAdminDetail) {
                res.status(201).json({
                    success: true,
                    msg: "Company detail has been added",
                });
            }
        } catch (error) {
            next(error);
        }
    },
    fetchCompanyAdminDetail: async (req, res, next) => {
        try {
            const companyAdminDetail = await CompanyAdmin.find();

            if (companyAdminDetail)
                res.status(200).json({ success: true, msg: "Detail fetched!", data: companyAdminDetail });
        } catch (error) {
            next(error);
        }
    },
    updateCompanyAdminDetail: async (req, res, next) => {
        try {
            const { id } = req.params;
            if (!id) return next(new ErrorResponse("condition does'nt match", 404));

            const updatCompanyAdminDetail = await CompanyAdmin.findByIdAndUpdate(id, req.body, {
                new: true
            });

            return res.status(201).json({
                success: true,
                msg: "Company update!",
                data: updatCompanyAdminDetail,
            });
        } catch (error) {
            next(error);
        }
    },
    deleteCompanyAdmin: async (req, res, next) => {
        try {
            const { id } = req.params;

            if (!id) return next(new ErrorResponse("condition does'nt match", 404));

            await CompanyAdmin.where({ _id: id }).findOneAndDelete();

            res.status(200).json({
                success: true,
                msg: "Company deleted!"
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = companyAdminDetail;