module.exports = function(application){
	application.get('/form_criar_nota', function(req, res){
		application.app.controllers.notas.form_criar_nota(application, req, res);
	});

	application.post('/notas/salvar', function(req, res){
		application.app.controllers.admin.notas_salvar(application, req, res);
	});
}