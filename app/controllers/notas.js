module.exports.form_criar_nota = function(application, req, res){
	res.render("notas/form_add_nota", {validacao : {}, noticia : {}});
}

module.exports.notas_salvar = function(application, req, res){
	var noticia = req.body;

	req.assert('nome','O nome da nota é obrigatório').notEmpty();
	req.assert('conteudo','O Conteúdo é obrigatório').notEmpty();
//	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('tipo','O Tipo é obrigatorio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("notas/form_add_nota", {validacao : erros, noticia : noticia});
		return;
	}

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNota(nota, function(error, result){
		res.redirect('/index');
	});	
}