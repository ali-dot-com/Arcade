const mysql = require("mysql");

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'password',
    database:'testdb1'
});

connection.connect((err)=>{
    if(err)
    {
        console.log("Database Connection Failed!");
        console.log(err);
    }
    else
    {
        console.log("Database Connected!");
    }
});

module.exports = connection;