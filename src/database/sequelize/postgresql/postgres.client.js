const { Sequelize } = require("sequelize");

const sequelizePostgressClient = new Sequelize({
    dialect: "postgres",
    host: `${process.env.DB_SOCKET_PATH}/${process.env.INSTANCE_CONNECTION_NAME}`, //"34.121.37.167",
    // dialectOptions: {
        // socketPath: "/cloudsql/bartucicd:us-central1:pg-sql-test"
    // }
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

module.exports = sequelizePostgressClient;