var mysql = require("mysql2");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"seedit",
    database:"eventmanagement",
    port:3307
})

console.log("mysql connected");

module.exports = con;