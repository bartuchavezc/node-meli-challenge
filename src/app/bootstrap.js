const { json } = require('express');
const db = require("../database/sequelize/postgresql/postgres.client");

function configure(app) {


    app.use(json());
    app.use('/', require('./index.router'));

    return app;
}

async function testDatabaseConnection() {
    db.sync();
    return await db.authenticate().then(_ => console.log("Database connection has been established successfully."));
}

async function initServer(app, port) {

    await testDatabaseConnection();

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = {
    configure,
    initServer
};