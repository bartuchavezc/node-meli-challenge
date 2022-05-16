const { json } = require('express');
const db = require("../database/sequelize/postgresql/postgres.client");
const app = require('express')();


app.use(json());
app.use('/', require('./index.router'));


module.exports = app;