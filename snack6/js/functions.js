//  definisco una funzione che restituisca un array con gli stessi elementi dell'array in input tranne l'ultimo

/**
 * Description: la funzione ci restituisce un array con gli stessi elementi dell'array dell'output meno l'ultimo elemento
 * @param {array} array
 * @returns {array}
 */
function removeElem(array) {
    let newArray = [];
    for(i = 1; i < array.length; i++){
        newArray.push(array [i - 1]);
    }

    return newArray
}