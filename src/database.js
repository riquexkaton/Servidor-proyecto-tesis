var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'inmobiliaria'
});

connection.connect((err)=>{
    console.log("se ha conectado de forma exitosa en mysql");
});


module.exports= connection;