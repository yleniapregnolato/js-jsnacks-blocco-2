// definisco una funzione che restituisca la posizione di un elemento all'interno dell'array

/**
 * Description: la funzione ci restituisce l'indice dell'elemento che stiamo cercando
 * @param {array} array
 * @param {string} elem
 * @returns {number}
 */
function isFindElem(array, elem) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === elem) {
            return i;
        }
    }

    return -1
}
