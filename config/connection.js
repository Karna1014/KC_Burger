//MySql connection
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "~KC70giresun",
    database: 'burgers_db'
});
//make connection or pass error
connection.connect(function(err) {
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connected.threadID);
});

//Export connection for other file use
module.exports = connection;