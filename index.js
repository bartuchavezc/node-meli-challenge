const app = require('./src/app/bootstrap');

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const port = process.env.PORT || 8080;

db.sync();

await db.authenticate().then(_ => console.log("Database connection has been established successfully."));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});