// backend/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',      // coloque sua senha do MySQL aqui, se tiver
  database: 'fanDB'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }
  console.log('Conectado ao banco MySQL');
});

module.exports = connection;
