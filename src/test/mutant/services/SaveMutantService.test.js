const MutantModel = require("../../../app/mutant/models/MutantModel");
const SaveIsMutantResultService = require("../../../app/mutant/services/SaveIsMutantResultService");

const db = require("../../../database/sequelize/postgresql/postgres.client");

describe('Save mutant service', () => {

    beforeEach(async () => {
        await db.sync({ force: true });
    })

    afterEach(async () => {
        await db.close();
    })

    test('1# Register mutant', async () => {
        jest.spyOn(MutantModel, 'create');

        const mutant = {
            dna: [
                'ATGCGA',
                'CAGTGC',
                'TTATGT',
                'AGAAGG',
                'CCCCTA',
            ].join('\n'),
            isMutant: true
        }

        const saveMutant = await SaveIsMutantResultService.save(mutant.dna, mutant.isMutant);

        expect(MutantModel.create).toHaveBeenCalledTimes(1);
        expect(saveMutant).toBeInstanceOf(MutantModel);
        expect(saveMutant.isMutant).toEqual(mutant.isMutant);
    });
});