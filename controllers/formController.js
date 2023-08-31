const { transporter } = require('../helpers/mailer');

const indexForm = (req, res) => {
    res.render('indexForm.ejs');
};

const enviarEmail = async (req, res) => {
    const { email, subject, message } = req.body
    const envio = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        message: message
    });
    console.log({ envio });
    res.send('Email enviado!');
};


module.exports = {
    indexForm,
    enviarEmail
};