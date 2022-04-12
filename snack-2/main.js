// SNACK 2
// Crea 10 oggetti che rappresentano una zucchina.

const zucchine = [
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 14
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

// Dividi in due array separati le zucchine 
// che misurano meno o più di 15cm.

const min15 = zucchine.filter((zucchina) => zucchina.lunghezza < 15);
console.log(min15);

const sup15 = zucchine.filter((zucchina) => zucchina.lunghezza > 15);
console.log(sup15);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// Calcola quanto pesano tutte le zucchine < 15
let pesoMin15 = 0;
min15.forEach(zucchina => {
    pesoMin15 += zucchina.peso;
});
console.log(pesoMin15);

// Calcola quanto pesano tutte le zucchine > 15
let pesoSup15 = 0;
sup15.forEach(zucchina => {
    pesoSup15 += zucchina.peso;
});
console.log(pesoSup15);