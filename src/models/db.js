//acceso a la base de datos 
const { Pool } = require("pg");

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Knight123", //"Knight123"
  database: "project_jwt",
});

module.exports = {connection};