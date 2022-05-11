const ser = require('./src/app/mutant/IsMuttantService');
const s = new ser();

s.dnaIsMuttant([
    'ATGCGA',
    'CGGTGC',
    'TTATGT',
    'AGAAAA',
]);