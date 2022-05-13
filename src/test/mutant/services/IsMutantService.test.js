
const IsMutantService = require("../../../app/mutant/services/IsMutantService");

describe("IsMutantService", () => {
    it("should find mutant on long input", () => {
        const input = require("../../../../long_input.json"); // long of 2961 X 1861

        const mutant = IsMutantService.isMutant(input);

        expect(mutant).toBe(true);

    });

    it("should find the horizontal pattern", () => {
        const dna = [
            "ATGCGA",
            "CGGGGC",
            "TTATGT",
            "AGAATA",
        ];

        const mutant = IsMutantService.isMutant(dna);

        expect(mutant).toBe(true);

    });

    it("should find the vertical pattern", () => {

        const dna = [
            "TACA",
            "TGCC",
            "TGTT",
            "TAAG",
        ]

        const mutant = IsMutantService.isMutant(dna);

        expect(mutant).toBe(true);

    });

    it("should find the ubiquos pattern", () => {

        const dna = [
            "TTGCGA",
            "CGATGC",
            "ATCAGT",
            "GACTAT",
            "AGATGA",
            "AGTAGA",
        ]

        const mutant = IsMutantService.isMutant(dna);

        expect(mutant).toBe(true);

    });
});

