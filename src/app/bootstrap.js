const { json } = require('express');
const db = require("../database/sequelize/postgresql/postgres.client");

function configure(app) {
    app.use(json());
    app.use('/', require('./index.router'));

    return app;
}

async function initServer(app, port) {
    await db.authenticate();
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = {
    configure,
    initServer
};