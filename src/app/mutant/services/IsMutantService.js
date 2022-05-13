function isMutant(dna) {

    const reg = new RegExp(/([A]{4}|[T]{4}|[G]{4}|[C]{4})/g);
    
    if (dna.length == dna[0].length) {
        
        for (let y = 0; y < dna.length; y++) {
            if (reg.test(dna.map((v, i) => dna[i][y]).join("") + "@" + dna[y])) return true;
        }

    } else {

        let columns = [];

        for (let y = 0; y < dna.length; y++) {
            if (reg.test(dna[y])) return true;

            if (columns.length <= 0) columns = dna[y].split('');
            else columns = columns.map((c, i) => c + dna[y][i]);
        }

        for (let x = 0; x < columns.length; x++) {
            if (reg.test(columns[x])) return true;
        }

    }


    for (let xy = 0; xy < dna[0].length; xy++) {
        dna[0].split('').map((r, i) => dna[i] ? [xy + i] ? dna[i][xy + i] : "-" : "-").join('')
        dna[0].split('').map((r, i) => dna[i] ? [i - xy] ? dna[i][i - xy] : "-" : "-").join('')

        if (reg.test(
            dna[0].split('').map((r, i) => dna[i] ? [xy + i] ? dna[i][xy + i] : "-" : "-").join('')
            + "@" + dna[0].split('').map((r, i) => dna[i] ? [i - xy] ? dna[i][i - xy] : "-" : "-").join('')
        )) return true;
    }

    return false;

}

module.exports = { isMutant };