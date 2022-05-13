const IsMuttantService = require('../services/IsMutantService');

function isMutant(req, res) {
    try {
        const { dna } = req.body;

        const mutant = IsMuttantService.isMutant(dna);

        res.json({
            isMutant: mutant
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = { isMutant };