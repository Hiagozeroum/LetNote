module.exports.index = function(application, req, res){

	var conexao = application.config.dbConnection();
	var notasModel = new application.app.models.notasDAO(conexao);

	notasModel.getNotas(function(error, result){
		res.render("home/index", {notas : result});	
	});

	
}