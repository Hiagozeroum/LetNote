module.exports.form_criar_nota = function(application, req, res){
	res.render("notas/form_add_nota", {validacao : {}, nota : {}});
}

module.exports.form_editar_nota = function(application, req, res){
	var connection = application.config.dbConnection();
	var notasModel = new application.app.models.notasDAO(connection);

	notasModel.getNotas(function(error, result){
		res.render("notas/form_edit_nota", {nota : result,validacao : {}});
	});	
}

module.exports.notas_excluir = function(application, req, res){
	var connection = application.config.dbConnection();
	var notasModel = new application.app.models.notasDAO(connection);

	notasModel.deletarNotaa(function(error, result){
		res.redirect('/index');
	});	

}


module.exports.notas_salvar = function(application, req, res){
	var nota = req.body;

	req.assert('nome','O nome da nota é obrigatório').notEmpty();
	req.assert('conteudo','O Conteúdo é obrigatório').notEmpty();
//	req.assert('tipo','O Tipo é obrigatorio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("notas/form_add_nota", {validacao : erros, nota : nota});
		return;
	}

	var connection = application.config.dbConnection();
	var notasModel = new application.app.models.notasDAO(connection);

	notasModel.salvarNota(nota, function(error, result){
		res.redirect('/index');
	});	
}

module.exports.notas_editar = function(application, req, res){
	var nota = req.body;

	req.assert('nome','O nome da nota é obrigatório').notEmpty();
	req.assert('conteudo','O Conteúdo é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("notas/form_edit_nota", {validacao : erros, nota : nota});
		return;
	}

	var connection = application.config.dbConnection();
	var notasModel = new application.app.models.notasDAO(connection);

	notasModel.editarNota(nota, function(error, result){
		res.redirect('/index');
	});	
}
