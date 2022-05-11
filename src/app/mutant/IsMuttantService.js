
class IsMutantService {

    constructor() { }

    /**
     * 
     * @param {string[]} dna 
     * @returns boolean
     */
    isMutant(dna) {
        const reg = new RegExp(/([A]{4}|[T]{4}|[G]{4}|[C]{4})/g);

        if (dna.length < 4) return reg.test(dna.join("@"));

        for (let i = 0; i <= (dna.length > 4 ? (dna.length / 2) : 0); i++) {
            // let date = new Date();
            for (let j = 0; j <= (dna[i].length / 2); j++) {

                let reverse_i = dna.length - 1 - i;
                let reverse_j = dna[i].length - 1 - j;

                /**
                * VENTANA 
                */
                let window = '@' + dna[i][j]+ dna[i][j + 1]+ dna[i][j + 2]+ dna[i][j + 3]
                    +'@'+ dna[i][j]+ dna[i + 1][j]+ dna[i + 2][j]+ dna[i + 3][j]
                    +'@'+ dna[i][j]+ dna[i + 1][j + 1]+ dna[i + 2][j + 2]+ dna[i + 3][j + 3]
                    +'@'+ dna[i][j + 3]+ dna[i + 1][j + 2]+ dna[i + 2][j + 1]+ dna[i + 3][j]

                    +'@'+ dna[i][reverse_j]+ dna[i][reverse_j - 1]+ dna[i][reverse_j - 2]+ dna[i][reverse_j - 3]
                    +'@'+ dna[i][reverse_j]+ dna[i + 1][reverse_j]+ dna[i + 2][reverse_j]+ dna[i + 3][reverse_j]
                    +'@'+ dna[i][reverse_j]+ dna[i + 1][reverse_j - 1]+ dna[i + 2][reverse_j - 2]+ dna[i + 3][reverse_j - 3]
                    +'@'+ dna[i][reverse_j - 3]+ dna[i + 1][reverse_j - 2]+ dna[i + 2][reverse_j - 1]+ dna[i + 3][reverse_j]

                    +'@'+ dna[reverse_i][j]+ dna[reverse_i][j + 1]+ dna[reverse_i][j + 2]+ dna[reverse_i][j + 3]
                    +'@'+ dna[reverse_i][j]+ dna[reverse_i - 1][j]+ dna[reverse_i - 2][j]+ dna[reverse_i - 3][j]
                    +'@'+ dna[reverse_i][j]+ dna[reverse_i - 1][j + 1]+ dna[reverse_i - 2][j + 2]+ dna[reverse_i - 3][j + 3]
                    +'@'+ dna[reverse_i][j + 3]+ dna[reverse_i - 1][j + 2]+ dna[reverse_i - 2][j + 1]+ dna[reverse_i - 3][j]

                    +'@'+ dna[reverse_i][reverse_j]+ dna[reverse_i][reverse_j - 1]+ dna[reverse_i][reverse_j - 2]+ dna[reverse_i][reverse_j - 3]
                    +'@'+ dna[reverse_i][reverse_j]+ dna[reverse_i - 1][reverse_j]+ dna[reverse_i - 2][reverse_j]+ dna[reverse_i - 3][reverse_j]
                    +'@'+ dna[reverse_i][reverse_j]+ dna[reverse_i - 1][reverse_j - 1]+ dna[reverse_i - 2][reverse_j - 2]+ dna[reverse_i - 3][reverse_j - 3]
                    +'@'+ dna[reverse_i][reverse_j - 3]+ dna[reverse_i - 1][reverse_j - 2]+ dna[reverse_i - 2][reverse_j - 1]+ dna[reverse_i - 3][reverse_j];


                /**
                * PASADAS VERTICALES EN EL LIMITE DE J
                */
                if (j == dna[i].length - 4) {

                    window += '@' + dna[i][j + 1] + dna[i + 1][j + 1] + dna[i + 2][j + 1] + dna[i + 3][j + 1] 
                       + '@' + dna[i][j + 2] + dna[i + 1][j + 2] + dna[i + 2][j + 2] + dna[i + 3][j + 2] 
                       + '@' + dna[i][j + 3] + dna[i + 1][j + 3] + dna[i + 2][j + 3] + dna[i + 3][j + 3] 
                       + '@' + dna[reverse_i][j + 1] + dna[reverse_i - 1][j + 1] + dna[reverse_i - 2][j + 1] + dna[reverse_i - 3][j + 1] 
                       + '@' + dna[reverse_i][j + 2] + dna[reverse_i - 1][j + 2] + dna[reverse_i - 2][j + 2] + dna[reverse_i - 3][j + 2] 
                       + '@' + dna[reverse_i][j + 3] + dna[reverse_i - 1][j + 3] + dna[reverse_i - 2][j + 3] + dna[reverse_i - 3][j + 3] 

                }

                if (reverse_j == 4) {
                    window += '@' + dna[i][reverse_j - 1] + dna[i + 1][reverse_j - 1] + dna[i + 2][reverse_j - 1] + dna[i + 3][reverse_j - 1] 
                        + '@' + dna[i][reverse_j - 2] + dna[i + 1][reverse_j - 2] + dna[i + 2][reverse_j - 2] + dna[i + 3][reverse_j - 2] 
                        + '@' + dna[i][reverse_j - 3] + dna[i + 1][reverse_j - 3] + dna[i + 2][reverse_j - 3] + dna[i + 3][reverse_j - 3] 
                        + '@' + dna[reverse_i][reverse_j - 1] + dna[reverse_i - 1][reverse_j - 1] + dna[reverse_i - 2][reverse_j - 1] + dna[reverse_i - 3][reverse_j - 1] 
                        + '@' + dna[reverse_i][reverse_j - 2] + dna[reverse_i - 1][reverse_j - 2] + dna[reverse_i - 2][reverse_j - 2] + dna[reverse_i - 3][reverse_j - 2] 
                        + '@' + dna[reverse_i][reverse_j - 3] + dna[reverse_i - 1][reverse_j - 3] + dna[reverse_i - 2][reverse_j - 3] + dna[reverse_i - 3][reverse_j - 3] 
                }

                if (reg.test(window)) return true;
            }
        }

        return false;
    }

}

module.exports = IsMutantService;