const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'adminfecap123',
  database: process.env.DB_NAME || 'GeracaoImpacto',
});

module.exports = pool.promise();
