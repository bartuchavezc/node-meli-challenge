function isMutant(dna) {

    const reg = new RegExp(/([A]{4}|[T]{4}|[G]{4}|[C]{4})/g);

    for (let y = 0; y < dna.length; y++) {
        if (reg.test(dna.map((v, i) => dna[i][y]).join("") + "@" + dna[y])) return true;
    }

    for (let xy = 0; xy < dna[0].length - 3; xy++) {
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