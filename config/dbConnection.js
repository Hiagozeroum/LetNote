
//var pg = require('pg');


/*module.exports = function () {
    var conString = 'postgres://postgres:123@localhost:3000/blocodenotas';
    var conexao = new pg.Client(conString);
 
    return conexao.connect();
};*/

var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '1234',
		database : 'note_taking'
	});
}

module.exports = function () {
	return connMySQL;
}

