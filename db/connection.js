const mysql = require('mysql2');
const util = require('util');

const db = mysql.createConnection({
    host:'localhost',
// Your mysql username,
user:'root',
// Your mysql password,
password: 'Bloomington28*',
database: 'Mordor'
});

db.connect();
db.query = util.promisify(db.query);

module.exports = db;
