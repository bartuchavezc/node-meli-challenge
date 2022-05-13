/**
 * 
 * @param {string[]} dna 
 * @returns boolean
 */
function isMutant(dna) {

    const reg = new RegExp(/([A]{4}|[T]{4}|[G]{4}|[C]{4})/g);

    if (dna.length < 4) return reg.test(dna.join("@"));

    for (let i = 0; i <= (dna.length / 2); i++) {

        for (let j = 0; j <= (dna[i].length / 2); j++) {

            let reverse_i = dna.length - 1 - i;
            let reverse_j = dna[i].length - 1 - j;

            /**
            * VENTANA 
            */
            let window =     // VENTANA [N, N]

            

            if (reg.test(window)) return true;
        }
    }

    return false;
}


function getWindow(i, j, dna) {
    let window = '@' + dna[i][j] + dna[i][j + 1] + dna[i][j + 2] + dna[i][j + 3]
        + '@' + dna[i][j] + dna[i + 1][j] + dna[i + 2][j] + dna[i + 3][j]
        + '@' + dna[i][j] + dna[i + 1][j + 1] + dna[i + 2][j + 2] + dna[i + 3][j + 3]
        + '@' + dna[i][j + 3] + dna[i + 1][j + 2] + dna[i + 2][j + 1] + dna[i + 3][j]        // VENTANA [0, 0]

        + '@' + dna[i][reverse_j] + dna[i][reverse_j - 1] + dna[i][reverse_j - 2] + dna[i][reverse_j - 3]
        + '@' + dna[i][reverse_j] + dna[i + 1][reverse_j] + dna[i + 2][reverse_j] + dna[i + 3][reverse_j]
        + '@' + dna[i][reverse_j] + dna[i + 1][reverse_j - 1] + dna[i + 2][reverse_j - 2] + dna[i + 3][reverse_j - 3]
        + '@' + dna[i][reverse_j - 3] + dna[i + 1][reverse_j - 2] + dna[i + 2][reverse_j - 1] + dna[i + 3][reverse_j]       // VENTANA [0, N]

        + '@' + dna[reverse_i][j] + dna[reverse_i][j + 1] + dna[reverse_i][j + 2] + dna[reverse_i][j + 3]
        + '@' + dna[reverse_i][j] + dna[reverse_i - 1][j] + dna[reverse_i - 2][j] + dna[reverse_i - 3][j]
        + '@' + dna[reverse_i][j] + dna[reverse_i - 1][j + 1] + dna[reverse_i - 2][j + 2] + dna[reverse_i - 3][j + 3]
        + '@' + dna[reverse_i][j + 3] + dna[reverse_i - 1][j + 2] + dna[reverse_i - 2][j + 1] + dna[reverse_i - 3][j]      // VENTANA [N, 0]

        + '@' + dna[reverse_i][reverse_j] + dna[reverse_i][reverse_j - 1] + dna[reverse_i][reverse_j - 2] + dna[reverse_i][reverse_j - 3]
        + '@' + dna[reverse_i][reverse_j] + dna[reverse_i - 1][reverse_j] + dna[reverse_i - 2][reverse_j] + dna[reverse_i - 3][reverse_j]
        + '@' + dna[reverse_i][reverse_j] + dna[reverse_i - 1][reverse_j - 1] + dna[reverse_i - 2][reverse_j - 2] + dna[reverse_i - 3][reverse_j - 3]
        + '@' + dna[reverse_i][reverse_j - 3] + dna[reverse_i - 1][reverse_j - 2] + dna[reverse_i - 2][reverse_j - 1] + dna[reverse_i - 3][reverse_j];

    /**
* PASADAS HORIZONTALES EN EL LIMITE DE I
*/
    if (dna.length == 4 || i == ((dna.length / 2) - 4)) {

        window += '@' + dna[i + 1][j] + dna[i + 1][j + 1] + dna[i + 1][j + 2] + dna[i + 1][j + 3]
            + '@' + dna[i + 2][j] + dna[i + 2][j + 1] + dna[i + 2][j + 2] + dna[i + 1][j + 3]
            + '@' + dna[i + 3][j] + dna[i + 3][j + 1] + dna[i + 3][j + 2] + dna[i + 3][j + 3] // VENTANA x[0, 3] y[0, 3]

            + '@' + dna[reverse_i - 1][j] + dna[reverse_i - 1][j + 1] + dna[reverse_i - 1][j + 2] + dna[reverse_i - 1][j + 3]
            + '@' + dna[reverse_i - 2][j] + dna[reverse_i - 2][j + 1] + dna[reverse_i - 2][j + 2] + dna[reverse_i - 2][j + 3]
            + '@' + dna[reverse_i - 3][j] + dna[reverse_i - 3][j + 1] + dna[reverse_i - 3][j + 2] + dna[reverse_i - 3][j + 3]// VENTANA x[0, 3] y[N, N-3]

            + '@' + dna[i + 1][reverse_j] + dna[i + 1][reverse_j - 1] + dna[i + 1][reverse_j - 2] + dna[i + 1][reverse_j - 3]
            + '@' + dna[i + 2][reverse_j] + dna[i + 2][reverse_j - 1] + dna[i + 2][reverse_j - 2] + dna[i + 2][reverse_j - 3]
            + '@' + dna[i + 3][reverse_j] + dna[i + 3][reverse_j - 1] + dna[i + 3][reverse_j - 2] + dna[i + 3][reverse_j - 3] // VENTANA x[N-3, N] y[0, 3]

            + '@' + dna[reverse_i - 1][reverse_j] + dna[reverse_i - 1][reverse_j - 1] + dna[reverse_i - 1][reverse_j - 2] + dna[reverse_i - 1][reverse_j - 3]
            + '@' + dna[reverse_i - 2][reverse_j] + dna[reverse_i - 2][reverse_j - 1] + dna[reverse_i - 2][reverse_j - 2] + dna[reverse_i - 2][reverse_j - 3]
            + '@' + dna[reverse_i - 3][reverse_j] + dna[reverse_i - 3][reverse_j - 1] + dna[reverse_i - 3][reverse_j - 2] + dna[reverse_i - 3][reverse_j - 3]; // VENTANA x[N, N-3] y[N, N-3]

    }

    /**
    * PASADAS VERTICALES EN EL LIMITE DE J
    */
    if (j == ((dna[i].length / 2) - 4)) {

        window += '@' + dna[i][j + 1] + dna[i + 1][j + 1] + dna[i + 2][j + 1] + dna[i + 3][j + 1]
            + '@' + dna[i][j + 2] + dna[i + 1][j + 2] + dna[i + 2][j + 2] + dna[i + 3][j + 2]
            + '@' + dna[i][j + 3] + dna[i + 1][j + 3] + dna[i + 2][j + 3] + dna[i + 3][j + 3]

            + '@' + dna[reverse_i][j + 1] + dna[reverse_i - 1][j + 1] + dna[reverse_i - 2][j + 1] + dna[reverse_i - 3][j + 1]
            + '@' + dna[reverse_i][j + 2] + dna[reverse_i - 1][j + 2] + dna[reverse_i - 2][j + 2] + dna[reverse_i - 3][j + 2]
            + '@' + dna[reverse_i][j + 3] + dna[reverse_i - 1][j + 3] + dna[reverse_i - 2][j + 3] + dna[reverse_i - 3][j + 3]

            + '@' + dna[i][reverse_j - 1] + dna[i + 1][reverse_j - 1] + dna[i + 2][reverse_j - 1] + dna[i + 3][reverse_j - 1]
            + '@' + dna[i][reverse_j - 2] + dna[i + 1][reverse_j - 2] + dna[i + 2][reverse_j - 2] + dna[i + 3][reverse_j - 2]
            + '@' + dna[i][reverse_j - 3] + dna[i + 1][reverse_j - 3] + dna[i + 2][reverse_j - 3] + dna[i + 3][reverse_j - 3]

            + '@' + dna[reverse_i][reverse_j - 1] + dna[reverse_i - 1][reverse_j - 1] + dna[reverse_i - 2][reverse_j - 1] + dna[reverse_i - 3][reverse_j - 1]
            + '@' + dna[reverse_i][reverse_j - 2] + dna[reverse_i - 1][reverse_j - 2] + dna[reverse_i - 2][reverse_j - 2] + dna[reverse_i - 3][reverse_j - 2]
            + '@' + dna[reverse_i][reverse_j - 3] + dna[reverse_i - 1][reverse_j - 3] + dna[reverse_i - 2][reverse_j - 3] + dna[reverse_i - 3][reverse_j - 3];

    }

}


module.exports = {
    isMutant
};