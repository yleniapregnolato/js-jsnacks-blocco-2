// definisco una funzione che mi permetta di controllare la lunghezza di due parole e confrontarle

/**
 * Description: la funzione confronta la lunghezza di due parole
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean} se true stampa, altrimenti false e stampa la più lunga delle due
 */
function isWordLength(word1, word2) {
    if (word1.length === word2.length) {
        console.log(word1, word2);
    } else if (word1.length > word2.length) {
        console.log(word1);
    } else {
        console.log(word2);
    }
}


