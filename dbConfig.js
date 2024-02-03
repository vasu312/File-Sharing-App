require("dotenv").config();

dbConfig = {
  database: process.env.DATABASE,
  username: process.env.NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
};
module.exports = dbConfig;
