const mysql = require('mysql2');

//parametros de configuração do banco (credenciais)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'catolica', //catolica
    database: 'userdb_leonardo', //nome do banco de dados
    port: '3307' //3307
});

//estabelecer a conexão
db.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
    //localhost:3307/userdb_leonardo
});

//exportar o módulo de conexão
module.exports = db;

