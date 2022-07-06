const CompanyAdmin = require("../model/companyAdminSchema");
const ManufacturerAdmin = require("../model/manufacturerAdminSchema");
const User = require("../model/userSchema");
const ErrorResponse = require("../utils/errorResponse");

const manufacturerAdminCtrl = {
    insertManufacturerDetail: async (req, res, next) => {
        try {
            const {
                manufacturer_email, manufacturer_name, company_id, pincode,
                registered_address, phone_one, phone_two, manufacturer_active_status
            } = req.body;

            const company = await CompanyAdmin.findById({ _id: company_id });

            if (!company) return next(new ErrorResponse("Invalid company", 404));

            const manufacturerDetail = await ManufacturerAdmin.create({
                manufacturer_email, manufacturer_name, company_id, pincode, manufacturer_active_status,
                registered_address, phone_one, phone_two, company_name: company?.company_name
            });

            if (manufacturerDetail) {
                res.status(201).json({
                    success: true,
                    msg: "Manufacturer detail has been added"
                });
            }
        } catch (error) {
            next(error);
        }
    },
    fetchManufacturerDetail: async (req, res, next) => {
        try {
            const manufacturerDetail = await ManufacturerAdmin.find();

            if (manufacturerDetail)
                res.status(200).json({ success: true, msg: "Detail fetched!", data: manufacturerDetail });
        } catch (error) {
            next(error);
        }
    },
    updateManufacturerDetail: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { pincode, registered_address, phone_one, phone_two, manufacturer_active_status } = req.body;

            if (!id) return next(new ErrorResponse("condition does'nt match", 404));

            const company = await CompanyAdmin.findById({ _id: company_id });

            if (!company) return next(new ErrorResponse("Invalid company", 404));

            const updatManufacturerDetail = await ManufacturerAdmin.findByIdAndUpdate(id, {
                pincode, manufacturer_active_status, registered_address, phone_one, phone_two
            }, {
                new: true
            });

            return res.status(201).json({
                success: true,
                msg: "Manufacturer update!",
                data: updatManufacturerDetail,
            });
        } catch (error) {
            next(error);
        }
    },
    deleteManufacturerDetail: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { email } = req.body;
            
            if (!id) return next(new ErrorResponse("data is empty", 404));

            await User.where({ email }).findOneAndDelete();

            await ManufacturerAdmin.where({ _id: id }).findOneAndDelete();

            res.status(200).json({
                success: true,
                msg: "Manufacturer deleted!"
            });
        } catch (error) {
            next(error);
        }
    }
};
module.exports = manufacturerAdminCtrl;