
class IsMutantService {

    constructor() { }

    isMutant(dna) {

        for (let i = 0; i < dna.length; i++) {
            for (let j = 0; j < dna[i].length; j++) {
                let x = [dna[i][j], dna[i][j + 1], dna[i][j + 2], dna[i][j + 3]];
                let y = [dna[i][j], dna[i + 1][j], dna[i + 2][j], dna[i + 3][j]];
                let rd = [dna[i][j], dna[i + 1][j + 1], dna[i + 2][j + 2], dna[i + 3][j + 3]];
                let ld = [dna[i][j + 3], dna[i + 1][j + 2], dna[i + 2][j + 1], dna[i + 3][j]];

                if (x.concat(y, rd, ld).join('').search(/([A]{4}|[T]{4}|[G]{4}|[C]{4})/g) !== -1) return true;
                                
            }        
        }

        return false;
    }

}

module.exports = IsMutantService;