const mysql = require('mysql')


const conexao = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'sapato02',
    database:'Agenda-Petshop'
})


module.exports = conexao