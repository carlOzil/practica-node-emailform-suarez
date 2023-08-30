const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
});


module.exports = { transporter }
