DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45),
    department_name VARCHAR(45),
    price decimal(10,4),
    stock_quantity INT
);