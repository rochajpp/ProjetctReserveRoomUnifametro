const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.HOST_DATABASE,
    user: process.env.USER_DATABASE,
    database: process.env.NAME_DATABASE,
    password: process.env.PASS_DATABASE,
    waitForConnections: true
});



module.exports = connection;
