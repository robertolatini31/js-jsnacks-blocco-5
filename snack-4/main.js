// SNACK 4
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const primoArray = ['a', 'b', 'c'];
const secondoArray = [1,2,3];

// function fusionArray (primoArray, secondoArray) {
//     let arrayFusion = [];
//     for(let i = 0; i < primoArray.length; i++){
//         arrayFusion.push(primoArray[i]);
       
//         arrayFusion.push(secondoArray[i]);
//     }
//     return arrayFusion;
// }

function fusionArray (primoArray, secondoArray) {
    let arrayFusion = [];
    primoArray.forEach((element, i) => {
        arrayFusion.push(element);
        arrayFusion.push(secondoArray[i])
    });
    return arrayFusion;
}




console.log(fusionArray(primoArray, secondoArray));