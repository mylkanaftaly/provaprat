const mysql = require('mysql2')

//Configuração do banco
  const conn = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'aluno_medio',
    password: '@lunoSenai23',
    database: 'produtos',
})

// É necessário exportar esse modulo