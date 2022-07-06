const nodemailer = require("nodemailer");
const nodemailMailgun = require('nodemailer-mailgun-transport');

const sendEmail = (options) => {
    const auth = {
        auth: {
            api_key: "7d5d4c6c1aef1391ab7e19cc52560675-523596d9-9e5238fa",
            domain: "sandbox4330046256884f9fab21d935f2d0528e.mailgun.org"
        }
    }
    const transporter = nodemailer.createTransport(nodemailMailgun(auth))

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text,
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

module.exports = sendEmail