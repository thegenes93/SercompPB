function CadastroDAO(connection) {
    this._connection = connection;
}

function relatorioerro(erro) {
    const fs = require('fs');
    fs.writeFile(__dirname + '/erroGerado.json', JSON.stringify(erro), err => {});
}

CadastroDAO.prototype.cadastrar = function (cadastrar, callback) {
    try {
        this._connection.query("INSERT INTO `kong`.`cadastro` SET ?", cadastrar, callback);
        this._connection.end(function (err) {});
    } catch (e) {
        relatorioerro(e);
    }
}

CadastroDAO.prototype.cadastrarHack = function (cadastrar, callback) {
    try {
        this._connection.query("INSERT INTO `kong`.`hack` SET ?", cadastrar, callback);
        this._connection.end(function (err) {});
    } catch (e) {
        relatorioerro(e);
    }
}

CadastroDAO.prototype.email = function (cadastrar, callback) {
    try {

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
            to: cadastrar.email,
            subject: "CONFIRMAÇÃO DE INSCRIÇÃO - SERCOMP",
            html: '<html><head><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" type="text/css" media="screen" href="https://sercomppb.com/css/app.css" /><link rel="stylesheet" type="text/css" media="screen" href="https://sercomppb.com/css/bootstrap.css" /><script src="https://sercomppb.com/js/bootstrap.min.js"></script><link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></head><body><div id="conteudo" ><div class="pr-5 pl-5 w-100 container"><div class="col-lg-6 col-md-9 col-sm-12 text-center m-auto "><div class="justify-content-center m-auto"><div class="row justify-content-center"><div class=""><a href="https://sercomppb.com/"><img src="https://sercomppb.com/img/logo.png" class="m-1 p-0 img-fluid" style="width: 200px"></a></div></div><h2 class=""><strong>Sua inscrição foi realizada com sucesso!</strong></h2><h4>Visite o nosso site!</h4></div></div></div><div class="row justify-content-center mt-5"><p class="mr-5 ml-5 p-0 text-center"><img src="https://sercomppb.com/img/devloops-icone.png" class="m-1 mt-5 p-0" width="50"></p></div></div></body></html>'
        }

        transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
                console.log('Error' + err);
            } else {
                console.log('Email enviado');
            }
        })

    } catch (e) {
        relatorioerro(e);
    }
}


module.exports = function () {
    return CadastroDAO;
}