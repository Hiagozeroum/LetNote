module.exports.index = function(application, req, res){

	var connection = application.config.dbConnection();
	var notasModel = new application.app.models.notasDAO(connection);

	notasModel.getNotas(function(error, result){
		res.render("home/index", {notas : result});	
	});

	
}