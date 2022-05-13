const { configure, initServer } = require('./src/app/bootstrap');

const app = require('express')();
const port = process.env.PORT || 3000;

configure(app);
initServer(app, port);


