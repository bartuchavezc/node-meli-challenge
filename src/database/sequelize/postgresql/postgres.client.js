const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/config");
const appConfig = require("../../../config/env.config");


const options = {
    dialect: "postgres",
    host: dbConfig.host,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
}

console.log(options);

if (appConfig.enviroment == "production" && dbConfig.provider == "GCP") {

    console.info(`Database socket path -> ${process.env.DB_SOCKET_PATH}/${process.env.INSTANCE_CONNECTION_NAME}`)
    
    options.host = `${process.env.DB_SOCKET_PATH || "/cloudsql"}/${process.env.INSTANCE_CONNECTION_NAME}`;
    options.dialectOptions = {
        socketPath: `${process.env.DB_SOCKET_PATH}/${process.env.INSTANCE_CONNECTION_NAME}`
    };
}

const sequelizePostgressClient = new Sequelize(options);
// console.log(sequelizePostgressClient);

module.exports = sequelizePostgressClient;