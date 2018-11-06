DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45),
    department_name VARCHAR(45),
    price decimal(10,4),
    stock_quantity INT,
    PRIMARY KEY (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES
("Mavic Pro", "Electronics", 799, 10),
("Canon Mark IV", "Electronics", 2000, 20),
("Coffe Mug", "Home Decor", 10.99, 100),
("My Pillow", "Home Decor", 20.99, 100),
("Micro SD", "Electronics", 64.99, 200),
("Mens Shirt", "Clothing", 19.99, 100),
("Mens Pants", "Clothing", 22.99, 100),
("Car Filter", "Automotive", 20, 100),
("Tire Pressure Gage", "Automotive", 5.99, 100);

