const SaveMutantService = require("../../mutant/services/SaveIsMutantResultService");

/**
 * 
 * @param {number} nMutants 
 * @param {number} nHumans 
 */
async function generateFakeMutants(nMutants, nHumans){
    let fake_dna = [
        'ATGCGA',
        'CAGTGC',
        'TTATGT',
        'AGAAGG',
        'CCCCTA',
    ].join('\n');

    for (let index = 0; index < nHumans; index++) {
        await SaveMutantService.save(fake_dna, false);
    }

    for (let index = 0; index < nMutants; index++) {
        await SaveMutantService.save(fake_dna, true);
    }

}

module.exports = {
    generateFakeMutants
}