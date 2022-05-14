const { configure, initServer } = require('./src/app/bootstrap');

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const app = require('express')();
const port = process.env.PORT || 8080;

configure(app);
initServer(app, port);


