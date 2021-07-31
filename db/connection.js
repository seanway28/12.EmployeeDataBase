const mysql = require('mysql2');

const util = require('util');

const db = mysql.createConnection({
    host:'localhost'

    // your mysql username,
,user:'root',
// your mysql password
password: 'perAsperaAdAstra!'
,database: 'company'
});

db.connect();
db.query = util.promisify(db.query);

module.exports = db;
