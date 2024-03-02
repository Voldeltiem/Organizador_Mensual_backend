//acceso a la base de datos 
const { Pool } = require("pg");

const dbConnection = new Pool({
  host: "localhost", //dpg-cn7qjjmn7f5s73c8vo60-a localhost
  port: 5432,
  user: "postgres", //postgres admin
  password: "Knight123", //"Knight123" vV2VrnsRQQcQuFfMSubKI0v1WjuhKUr2
  database: "project_jwt", //market_place_zfy4 project_jwt
});

module.exports = dbConnection;