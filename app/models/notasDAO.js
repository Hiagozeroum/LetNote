function notasDAO(connection){
	this._connection = connection;
}

var query;

notasDAO.prototype.getNotas = function(callback){
	this._connection.query('select * from nota order by nome', callback);
}

notasDAO.prototype.getNota = function(id, callback){
	console.log(id.id);
	this._connection.query('select * from nota where id = ' + id.id, callback);
}

notasDAO.prototype.editaNota = function(id, callback){
	console.log(id.id);
	this._connection.query("update nota SET nome='"+nota.nome+"',conteudo='"+nota.conteudo+"'where id = "+ id.id, callback);
}

notasDAO.prototype.salvarNota = function(nota, callback){
	this._connection.query('insert into nota set ? ', nota, callback)
}



module.exports = function(){
	return notasDAO;
}