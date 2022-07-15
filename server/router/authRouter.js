const authRouter = require("express").Router();
const { register, login, forgetPassword, resetPassword } = require("../controller/authCtrl");

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/forgetpassword', forgetPassword);
authRouter.put('/resetpassword/:resetToken', resetPassword);

module.exports = authRouter