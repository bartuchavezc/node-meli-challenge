//Make mutant sequelize schema
const Sequelize = require("sequelize");
const db = require("../../../database/sequelize/postgresql/postgres.client");

const MutantModel = db.define('MutantModel', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    dna: {
        type: Sequelize.TEXT,
    },
    isMutant: {
        type: Sequelize.BOOLEAN,
    }
});

module.exports = MutantModel;