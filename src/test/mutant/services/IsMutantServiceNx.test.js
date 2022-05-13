
const IsMutantServiceNx = require("../../../app/mutant/services/IsMutantServiceNx");

it("should find on long text", () => {
    const input = require("../../../../long_input.json"); // long of 2961 X 1861

    const mutant = IsMutantServiceNx.isMutant(input);

    expect(mutant).toBe(true);

});

it("should find horizontal pattern", () => {
    const dna = [
        "ATGCGA",
        "CGGGGC",
        "TTATGT",
        "AGAATA",
    ];

    const mutant = IsMutantServiceNx.isMutant(dna);

    expect(mutant).toBe(true);

});

it("should find vertical pattern", () => {

    const dna = [
        "TACA",
        "TGCC",
        "TGTT",
        "TAAG",
    ]

    const mutant = IsMutantServiceNx.isMutant(dna);

    expect(mutant).toBe(true);

});

it("should find ubiquos pattern", () => {

    const dna = [
        "TTGCGA",
        "CGATGC",
        "ATCAGT",
        "GACTAT",
        "AGATGA",
        "AGTAGA",
    ]

    const mutant = IsMutantServiceNx.isMutant(dna);

    expect(mutant).toBe(true);

});