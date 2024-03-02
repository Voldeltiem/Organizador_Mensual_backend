-- Crear la base de datos
CREATE DATABASE project_jwt;

-- Conectar a la base de datos
\c project_jwt;

-- Crear la tabla login
CREATE TABLE public.login (
    username character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    PRIMARY KEY (username, password)
);

INSERT INTO login (username, password) VALUES
    ('usuario1', 'hashed_password1'),
    ('usuario2', 'hashed_password2'),
    ('usuario3', 'hashed_password3')
;