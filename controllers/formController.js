const { transporter } = require('../helpers/mailer');

const indexForm = (req, res) => {
    res.render('indexForm.ejs');
};

const enviarEmail = async (req, res) => {
    const { email, subject, message } = req.params
    const envio = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        message: message
    });
    console.log({ envio })
    res.status(200).json({
        ok: true,
        msg: "Email enviado!"
    });
};


module.exports = {
    indexForm,
    enviarEmail
};