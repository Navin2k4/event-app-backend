import { Sequelize } from "sequelize";

const DB_NAME = "eventapp";
const DB_USER = "root";
const DB_PASSWORD = "navin";
const DB_HOST = "localhost";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
