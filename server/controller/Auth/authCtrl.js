const User = require("../../model/AuthSchema/userSchema");
const ErrorResponse = require("../../utils/errorResponse");
const sendEmail = require("../../utils/sendEmail");
const crypto = require("crypto");
const roleToken = require("../../helper/roleToken");

const userAuthCtrl = {
    register: async (req, res, next) => {
        const { username, email, password, role, company_email } = req.body;
        try {
            const user = await User.create({
                username, email, password, role, company_email
            });
            sendRegisterToken(user, 201, res);
        } catch (error) {
            next(error);
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) return next(new ErrorResponse("Please provide email and password.", 401));

            const user = await User.findOne({ email }).select("+password");

            if (!user) return next(new ErrorResponse("Invalid Credentials.", 401));

            const isMatch = await user.matchPasswords(password);
            if (!isMatch) return next(new ErrorResponse("Invalid Credentials.", 401));;

            sendToken(user, 200, res);

        } catch (error) {
            next(error);
        }
    },
    forgetPassword: async (req, res, next) => {
        const { email } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return next(new ErrorResponse("Email couldn't be sent", 404));
            }

            const resetToken = user.getResetPasswordToken();

            await user.save();

            const resetUrl = `http://35.92.20.94/passwordreset/${resetToken}`;

            const message = `
                <h1>You have requested a password reset</h1>
                <p>Please go to this link to reset password</p>
                <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
            `;

            try {
                await sendEmail({
                    to: user.email,
                    subject: "Password Reset Request",
                    text: message
                });

                res.status(200).json({
                    success: true,
                    data: "Email Sent"
                });
            } catch (error) {
                user.resetPasswordToken = undefined;
                user.resetPasswordExpire = undefined;

                await user.save();

                return next(new ErrorResponse("Email could not be send"));
            }

        } catch (error) {
            next(error);
        }
    },
    resetPassword: async (req, res, next) => {
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

        try {
            const user = await User.findOne({
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
            });

            console.log(user);

            if (!user) {
                return next(new ErrorResponse("Invalid Reset Token", 400));
            }

            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            res.status(200).json({
                success: true,
                data: "Password Reset Success",
                token: user.getSignedJwtToken(),
            });
        } catch (error) {
            next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const { params: { id, role } } = req;
            if (!id) return next(new ErrorResponse("Invalid User!", 400));
            if (role === 1) return next(new ErrorResponse("Do not allowed to delete this user!", 400));

            const userToDelete = await User.where({ _id: id, role }).findOneAndDelete();
            if (userToDelete) {
                res.status(200).json({
                    success: true,
                    msg: "User Deleted!"
                });
            }
        } catch (error) {
            next(error);
        }
    }
};

const sendRegisterToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({
        success: true,
        msg: "User Registered!",
        token
    });
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    let userInfo = { name: user.username, role: user.role };
    res.status(statusCode).json({ success: true, token, userInfo });
};

module.exports = userAuthCtrl;