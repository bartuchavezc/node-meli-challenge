const Sequelize = require("sequelize");
const db = require("../../../database/sequelize/postgresql/postgres.client");
const MutantModel = require("../models/MutantModel");

/**
 * 
 * @return {Promise<{mutants: number, humans: number, avg: number}>}
 */
async function getMutantStats() {

    const query = `
        SELECT 
	        SUM(CASE WHEN  "isMutant" = TRUE THEN 1 ELSE 0 end) mutants,
	        SUM(CASE WHEN  "isMutant" = TRUE THEN 0 ELSE 1 end) humans
        FROM "MutantModels"
    `;

    const stats = await db.query(query, { type: Sequelize.QueryTypes.SELECT });

    return {
        count_mutant_dna: stats[0].mutants,
        count_human_dna: stats[0].humans,
        ratio: (stats[0].mutants / stats[0].humans).toFixed(2)
    }
}

module.exports = {
    getMutantStats
}

