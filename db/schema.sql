DROP DATABASE IF EXISTS work_db;
CREATE DATABASE work_db;


USE work_db;

CREATE TABLE departments (
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_id VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title_id VARCHAR(30) NOT NULL,
    salary_id DECIMAL NOT NULL,
    department_id INT NOT NULL
);


CREATE TABLE employee (
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);


