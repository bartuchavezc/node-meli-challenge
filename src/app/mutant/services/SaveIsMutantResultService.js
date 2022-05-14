const { v4: uuidv4 } = require('uuid');
const MutantModel = require("../models/MutantModel");

/**
 * 
 * @param {string} dna 
 * @param {boolean} isMutant 
 */
async function save(dna, isMutant) {
    const mutantData = { id: uuidv4(), dna, isMutant };
    await MutantModel.create(mutantData)
    .then(result => console.log(`Mutant saved successfully \n`, result))
    .catch(err => {
        console.error(`Something wrong saving is mutant result \n`, mutantData, err);
    });
}

module.exports = {
    save
}

