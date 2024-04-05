//  definisco una funzione che tramite un ciclo for scorra tutti gli elementi dell'array di input e ci restituisca un array nuova con gli stessi elementi meno il primo

/**
 * Description: la funzione ci restituisce una nuova array con gli stessi elementi dell'array di input meno il primo
 * @param {array} array
 * @returns {array}
 */
function remuveElem(array) {
    let newArray = [];
    for(i = 1; i < array.length; i++) {
        newArray.push(array [i]);
    }

    return newArray
}