const IsMuttantService = require('../services/IsMutantService');
const SaveIsMutantResultService = require('../services/SaveIsMutantResultService');
const MutantStatsService = require('../services/MutantStatsService');

async function getMutantStats(req, res) {
    const mutants = await MutantStatsService.getMutantStats();
    return res.json(mutants);
}

function isMutant(req, res) {
    try {
        const { dna } = req.body;

        const mutant = IsMuttantService.isMutant(dna);

        SaveIsMutantResultService.save(dna.join("\n"), mutant);

        return res.json({
            isMutant: mutant
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = { isMutant, getMutantStats };