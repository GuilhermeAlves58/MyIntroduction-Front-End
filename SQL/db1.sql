-- create customers table
CREATE TABLE customers (
  id INT,
  first_name STRING,
  last_name STRING,
  address STRING,
  PRIMARY KEY (id)
);
INSERT INTO customers VALUES (1, 'John', 'Doe', '32 Cherry Blvd');
INSERT INTO customers VALUES (2, 'Angela', 'Yu', '12 Sunset Drive');

SELECT * FROM customers WHERE first_name = 'John';


CREATE TABLE products (
    id INT NOT NULL,
    name STRING,
    price MONEY,
    PRIMARY KEY (id)
);

INSERT INTO products VALUES (1, 'Pen', 1.20);

SELECT * FROM products WHERE id = 1;

INSERT INTO products (id, name) VALUES (2, 'Pencil');

SELECT * FROM products WHERE id = 2;

UPDATE products SET price=0.8 WHERE id = 2;

SELECT * FROM products;

ALTER TABLE products ADD stock INT;

UPDATE products SET stock=32 WHERE id = 1;

SELECT * FROM products;

UPDATE products SET stock=12 WHERE id = 2;

SELECT * FROM products;

DELETE FROM products WHERE id = 2;

INSERT INTO products VALUES (2, 'Pencil', 0.8, 12);

CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO orders VALUES (1, 4362, 2, 1);

SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON product_id = products.id;