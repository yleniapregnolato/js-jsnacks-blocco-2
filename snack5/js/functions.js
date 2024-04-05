// definisco una funzione che scorrerà un array tramite ciclo for per poi stampare tutti gli elementi separati da una virgola

/**
 * Description: la funzione stampa tutti gli elementi presenti all'interno dell'array
 * @param {array} array
 * @returns {string}
 */
function arrayPrint (array) {
    let result = "";
    for (i = 0; i < array.length; i++) {
        result += array[i] + ",";
    }

    return result
}