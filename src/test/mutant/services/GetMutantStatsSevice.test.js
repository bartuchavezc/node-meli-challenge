const db = require("../../../database/sequelize/postgresql/postgres.client");
const GetMutantStatsService = require("../../../app/mutant/services/GetMutantStatsService");
const MutantModel = require("../../../app/mutant/models/MutantModel");

describe('Save mutant service', () => {

    beforeEach(async () => {
        await db.sync({ force: true });

        let fake_dna = [
            'ATGCGA',
            'CAGTGC',
            'TTATGT',
            'AGAAGG',
            'CCCCTA',
        ].join('\n');

        let mutants = new Array(40).map(x => {return { dna: fake_dna, isMutant: true }});
        let humans = new Array(100).map(x => {return { dna: fake_dna, isMutant: false }});

        MutantModel.bulkCreate([mutants.concat(humans)]);

    });

    afterEach(async () => {
        await db.close();
    })

    test('mutant stats', async () => {
        jest.spyOn(db, 'query');

        const stats = {
            count_mutant_dna: 40,
            count_human_dna: 100,
            ratio: 0.4
        }

        const statsResult = await GetMutantStatsService.getMutantStats();

        expect(db.query).toHaveBeenCalledTimes(1);
        expect(statsResult).toEqual(stats);
    });
});