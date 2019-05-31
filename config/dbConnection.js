
var pg = require('pg');


module.exports = function () {
    var conString = 'postgres://postgres:1234@localhost:5432/blocodenotas';
    var conexao = new pg.Client(conString);
 
    return conexao.connect();
};
