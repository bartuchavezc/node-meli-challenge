require("dotenv").config();

const app = require('./src/app/bootstrap');
const db = require("./src/database/sequelize/postgresql/postgres.client");


const port = process.env.PORT || 8080;

db.sync();

db.authenticate().then(_ => {
    console.info("Database connection has been established successfully.")

    console.info("Initializing server...");
    app.listen(port, () => {
        console.info(`Server running on port ${port}`);
    });

}).catch(err => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
})

