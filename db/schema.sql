DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT auto_increment PRIMARY KEY
, burger_name VARCHAR(30)
, devoured BOOLEAN DEFAULT false
);
//