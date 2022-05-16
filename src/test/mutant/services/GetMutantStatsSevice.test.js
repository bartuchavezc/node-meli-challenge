const db = require("../../../database/sequelize/postgresql/postgres.client");
const GetMutantStatsService = require("../../../app/mutant/services/GetMutantStatsService");
const SaveMutantService = require("../../../app/mutant/services/SaveIsMutantResultService");

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

        for (let index = 0; index < 10; index++) {
            await SaveMutantService.save(fake_dna, false);
            if (index % 2 === 0) {
                await SaveMutantService.save(fake_dna, true);
            }
        }

    });

    test('should get mutant stats', async () => {
        jest.spyOn(db, 'query');

        const stats = {
            count_mutant_dna: 5,
            count_human_dna: 10,
            ratio: 0.5
        }

        const statsResult = await GetMutantStatsService.getMutantStats();

        expect(db.query).toHaveBeenCalledTimes(1);
        expect(statsResult).toEqual(stats);
    });

    test('mutant ratio should be count_mutant_dna/count_human_dna', async () => {
        const statsResult = await GetMutantStatsService.getMutantStats();
        
        expect(statsResult.ratio).toEqual(statsResult.count_mutant_dna / statsResult.count_human_dna);
    });
});