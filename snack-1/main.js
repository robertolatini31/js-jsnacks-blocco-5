// Crea un array di 10 oggetti che rappresentano una zucchina, 
// indicando per ognuna varietà, peso e lunghezza.


const zucchine = [
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 5
    },
    {
        varieta: 'faenza',
        peso: 22,
        lunghezza: 20
    },
    {
        varieta: 'faenza',
        peso: 12,
        lunghezza: 55
    },
    {
        varieta: 'faenza',
        peso: 9,
        lunghezza: 33
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 4
    },
    {
        varieta: 'faenza',
        peso: 55,
        lunghezza: 8
    },
    {
        varieta: 'faenza',
        peso: 3,
        lunghezza: 66
    },
    {
        varieta: 'faenza',
        peso: 5,
        lunghezza: 77
    },
    {
        varieta: 'faenza',
        peso: 70,
        lunghezza: 9
    }
];

// Calcola quanto pesano tutte le zucchine.
let pesoTotale = 0;
zucchine.forEach(zucchina => {
    pesoTotale += zucchina.peso;
});
console.log(pesoTotale);