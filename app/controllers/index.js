module.exports.index = function (application, req, res) {
        res.render('index');
}

module.exports.index2 = function (application, req, res) {
        res.render('index2');
}

module.exports.insEvento = function (application, req, res) {
        res.render('inscricao-evento');
}

module.exports.hack = function (application, req, res) {
        res.render('hackaton');
}
module.exports.CadEvento = function (application, req, res) {
        let cadastrar = req.body;
        const connection = application.config.dbConnection();
        let EventoModel = new application.app.models.CadastroDAO(connection);
        EventoModel.email(cadastrar, function (err, result) {});
        EventoModel.cadastrar(cadastrar, function (err, result) {
                res.redirect('sucesso');
        });
}

module.exports.CadHack = function (application, req, res) {
        let cadastrar = req.body;
        const connection = application.config.dbConnection();
        let EventoModel = new application.app.models.CadastroDAO(connection);
        EventoModel.cadastrarHack(cadastrar, function (err, result) {
                res.redirect('sucesso');
        });
}

module.exports.insHack = function (application, req, res) {
        res.render('inscricao-hackaton');
}

module.exports.insSub = function (application, req, res) {
        res.render('inscricao-submissao');
}

module.exports.chama = function (application, req, res) {
        res.render('chamada-trabalhos');
}

module.exports.mob = function (application, req, res) {
        res.render('index-mobile');
}

module.exports.hackMob = function (application, req, res) {
        res.render('hackaton-mobile');
}

module.exports.chamaMob = function (application, req, res) {
        res.render('chamada-trabalhos-mobile');
}
module.exports.insMob = function (application, req, res) {
        res.render('inscricao-evento-mobile');
}
module.exports.insSubMob = function (application, req, res) {
        res.render('inscricao-submissao-mobile');
}
module.exports.insHackMob = function (application, req, res) {
        res.render('inscricao-hackaton-mobile');
}

module.exports.sucesso = function (application, req, res) {
        res.render('sucesso');
}
module.exports.sucessoMob = function (application, req, res) {
        res.render('sucesso-mobile');
}


module.exports.resultado = function (application, req, res) {
        res.render('resultado-dos-trabalhos');
}
module.exports.resultadoMobile = function (application, req, res) {
        res.render('resultado-dos-trabalhos-mobile');
}