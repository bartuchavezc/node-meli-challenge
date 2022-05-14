const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/config");
const appConfig = require("../../../config/env.config");


let options = {
    dialect: "postgres",
    host: dbConfig.host,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database
}

if (appConfig.enviroment == "test") {
    options = 'sqlite::memory:'
}

if (appConfig.enviroment == "production" && dbConfig.provider == "GCP") {

    options = {
        dialect: "postgres",
        host: `${process.env.DB_SOCKET_PATH || "/cloudsql"}/${process.env.INSTANCE_CONNECTION_NAME}`,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        dialectOptions: {
            socketPath: `${process.env.DB_SOCKET_PATH}/${process.env.INSTANCE_CONNECTION_NAME}`
        }
    };
}



const sequelizePostgressClient = new Sequelize(options, { logging: false });

module.exports = sequelizePostgressClient;