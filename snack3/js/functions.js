
// definisco una funzione per contare il numero di elementi presenti in un array

/**
 * Description: la funzione scorre tutta l'array e ci restituire la quantità di elementi al suo interno
 * @param {array} array
 * @returns {number}
 */
function conuntElements(array) {
    i = 0
    while (i < array.length) {
        console.log(array[i], i);
        i++;
    }

    return i
}