module.exports = function (application) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const nodemailer = require('nodemailer');


    const transporter = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: 'sercomppb@hotmail.com',
            pass: 'uepb2018'
        }
    });

    var mailOptions = {
        from: 'sercomppb@hotmail.com',
        to: 'sercompeupb@gmail.com',
        subject: 'SUBMISSÃO DE ARTIGO - Sercomp',
        text: "TESTESAO",
        attachments: [
            {
                path: "C:/Users/Balaú/Downloads/KONG/app/public/img/anexar.svg"
            },
        ]
    }

    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.log('Error' + err);
        } else {
            console.log('Email Sent');
        }
    })

}