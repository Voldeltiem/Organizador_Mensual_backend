-- Crear la base de datos
CREATE DATABASE project_jwt;

-- Conectar a la base de datos
\c project_jwt;

-- Crear la tabla login
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

