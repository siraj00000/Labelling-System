const authRouter = require("express").Router();
const { register, login, forgetPassword, resetPassword, deleteUser } = require("../../controller/Auth/authCtrl");

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/forgetpassword', forgetPassword);
authRouter.put('/resetpassword/:resetToken', resetPassword);
authRouter.delete('/remove-user/:id/:role', deleteUser);

module.exports = authRouter