
var pg = require('pg');


module.exports = function () {
    var conString = 'postgres://postgres:123@localhost:3000/blocodenotas';
    var conexao = new pg.Client(conString);
 
    return conexao.connect();
};
