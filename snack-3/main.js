// SNACK 3 
// Scrivi una funzione che accetti una stringa come argomento 
// e la ritorni girata (es. Ciao -> oaiC)

/**
 * 
 * @param {string} string 
 */
function reverseString (string) {
    const stringReverse = string.split('').reverse().join('');
    return stringReverse;
}

console.log(reverseString('Ciao'));
