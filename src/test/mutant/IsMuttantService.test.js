const IsMutantService = require('../../app/mutant/IsMuttantService');

const isMutantService = new IsMutantService();

describe('IsMutantService', () => {

    it("should find horizontal pattern", () => {
        const dna = [
            'ATGCGA',
            'CGGTGC',
            'TTATGT',
            'AGAAAA',
        ];
    
        const isMutant = isMutantService.isMutant(dna);
    
        expect(isMutant).toBe(true);
    
    });
    
    it("should find vertical pattern", () => {
       
        const dna = [
            'TACA',
            'TGCC',
            'TGTT',
            'TAAG',
        ]
    
        const isMutant = isMutantService.isMutant(dna);
    
        expect(isMutant).toBe(true);
    
    });
    
    
    it("should find ubiquos pattern", () => {
        
        const dna = [
            'TTGCGA',
            'CGATGC',
            'TTCAGT',
            'AGATAT',
            'AGATGA',
        ]
    
        const isMutant = isMutantService.isMutant(dna);
    
        expect(isMutant).toBe(true);
    
    });
    
    it("should find invert ubiquos pattern", () => {
        
        const dna = [
            'TTG',
            'TGA',
            'TTC',
            'TTC',
        ]
    
        const isMutant = isMutantService.isMutant(dna);
    
        expect(isMutant).toBe(true);
    
    });
    
    
    it("should find on long text", () => {
        const input = require('../../../long_input.json'); // long of 2961 X 1861
    
        const isMutant = isMutantService.isMutant(input);
    
        expect(isMutant).toBe(true);
    
    });

});

