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
      connection.query("SELECT * FROM products", function(err, res){
        if(err){
            console.log(err);
        }
        for(var i = 0; i < res.length; i++){
         console.log("ID: " + res[i].id + "   " + "Product: " + res[i].product_name + "   " + "Price: " + "$" + res[i].price + '\n');
        }
        inquirer.prompt({
            type: "input",
            message: "Please select an item by ID number.",
            name: "productID"
        }).then(function(reply){
            for(var i = 0; i < res.length; i++){
                if(parseInt(reply.productID) === res[i].id){
                console.log(res[i].product_name + ' ' + res[i].price);
                }
            }
              
            
        })

        connection.end();
    });
  }
  

