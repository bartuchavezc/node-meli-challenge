const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/config");
const appConfig = require("../../../config/env.config");

const options = {
    dialect: "postgres",
    host: dbConfig.host,
    username: dbConfig.username,
    password: dbConfig.password,
}

if (appConfig.enviroment == "production" && dbConfig.provider == "GCP") {
    options.host = `${process.env.DB_SOCKET_PATH}/${process.env.INSTANCE_CONNECTION_NAME}`;
    options.dialectOptions = {
        socketPath: process.env.DB_SOCKET_PATH
    };
}

const sequelizePostgressClient = new Sequelize(options);


module.exports = sequelizePostgressClient;