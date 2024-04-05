// funzione che genera N array

/**
 * Description: la funzione genera tante array quante indicate dall'utente
 * @param {number} nArray 
 * @returns {array} 
 */
function isNumberArray (nrArray) {
    let rdnArray = [];
    for(let i = 0; i < N; i++) {
        rdnArray.push(Math.floor(Math.random() * 100)+1);
    }

    return rdnArray;
}


