var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bamazon_DB"
});

connection.connect( function(err){
    if(err) throw err;
    startApp();
});



  function startApp(){
    connection.query("SELECT id, product_name, price FROM products ",function(err, res){
        for(var i = 0; i < res.length; i++){
            console.log("ID: " + res[i].id + "   " + "Product: " + res[i].product_name + "   " + "Price: " + "$" + res[i].price + '\n');
            console.log("----------------------------------------------------------");
        }
    });
    connection.end();
};




