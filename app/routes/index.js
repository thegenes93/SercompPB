module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.index2(application, req, res);
    });
    application.get('/index', function (req, res) {
        application.app.controllers.index.index(application, req, res);
    });
    application.get('/hackton', function (req, res) {
        application.app.controllers.index.hack(application, req, res);
    });
    application.get('/inscricao-evento', function (req, res) {
        application.app.controllers.index.insEvento(application, req, res);
    });
    application.post('/inscricao', function (req, res) {
        application.app.controllers.index.CadEvento(application, req, res);
    });
    application.get('/inscricao-hackaton', function (req, res) {
        application.app.controllers.index.insHack(application, req, res);
    });
    application.post('/inscricaoHack', function (req, res) {
        application.app.controllers.index.CadHack(application, req, res);
    });
    application.get('/inscricao-submissao', function (req, res) {
        application.app.controllers.index.insSub(application, req, res);
    });
    application.post('/inscricaosub', function (req, res) {
        application.app.controllers.index.email(application, req, res);
    });
    application.get('/chamada-trabalhos', function (req, res) {
        application.app.controllers.index.chama(application, req, res);
    });
    application.get('/index-mobile', function (req, res) {
        application.app.controllers.index.mob(application, req, res);
    });
    application.get('/inscricao-evento-mobile', function (req, res) {
        application.app.controllers.index.insMob(application, req, res);
    });
    application.get('/inscricao-submissao-mobile', function (req, res) {
        application.app.controllers.index.insSubMob(application, req, res);
    });
    application.get('/hackaton-mobile', function (req, res) {
        application.app.controllers.index.hackMob(application, req, res);
    });
    application.get('/inscricao-hackaton-mobile', function (req, res) {
        application.app.controllers.index.insHackMob(application, req, res);
    });
    application.get('/chamada-trabalhos-mobile', function (req, res) {
        application.app.controllers.index.chamaMob(application, req, res);
    });

    application.get('/sucesso', function (req, res) {
        application.app.controllers.index.sucesso(application, req, res);
    });
    application.get('/sucesso-mobile', function (req, res) {
        application.app.controllers.index.sucessoMob(application, req, res);
    });
    application.get('/resultado-dos-trabalhos', function (req, res) {
        application.app.controllers.index.resultado(application, req, res);
    });
    application.get('/resultado-dos-trabalhos-mobile', function (req, res) {
        application.app.controllers.index.resultadoMobile(application, req, res);
    });
}