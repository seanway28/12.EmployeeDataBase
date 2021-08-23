const mysql = require('mysql2');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
const util = require('util');

const db = mysql.createConnection({
    host:'localhost',
// Your mysql username,
user:'root',
// Your mysql password,
password: 'Bloomington28*',
database: 'company'
});
//   (method) Connection.connect(callback?: (err: mysql.QueryError) => void): void
db.connect(function(e){if(e) console.log(e)});
db.query = util.promisify(db.query);

module.exports = db;
