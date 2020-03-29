DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE addaBurger (
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(50) NOT NULL,
    devoured boolean,
    PRIMARY KEY(id)
);