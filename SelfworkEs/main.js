let n1 = 3;
let n2 = 45;
let n3 = 16;
let n4 = 9;
let n5 = 23;
let somma = (n1+n2+n3+n4+n5);
let media = ((n1+n2+n3+n4+n5)/5);
console.log("La somma di questi numeri equivale a", somma, ", mentre la media equivale a", media);

let annoN = 1986;
let annoA = 2024;
let età = (annoA - annoN);
let anniNecessari = (100 - età);
console.log("Hai", età, "anni e te ne mancano", anniNecessari, "per compiere i cento.");2


let a = parseInt(prompt("Inserisci il primo numero:"));
let b = parseInt(prompt("Inserisci il secondo numero:"));
let sott;
console.log("La somma è:", a+b);
a > b ? sott = a-b : sott = b-a;
console.log("La differenza è:", sott);
console.log("Il prodotto è:", a*b);
console.log("Il quoziente è:", a/b);
console.log("Il risultato dell'elevazione alla potenza è", a**b);

let array1 = [['Un', 'per', 'incatenarli.', 'un'], ['Anello', 'trovarli,'], ['ghermirli', 'e'], ['gondor', 'mark'],];
let array2 = [[['trovarli,']],['tu,', 'sciocchi'],['tu,', 'sciocchi', ['padron', 'Sauron']],['nel', ['fuggite', 'gandalf']],[['domarli,', 'passare'], 'buio']];
console.log(array1[0][0], array1[1][0], array1[0][1], array2[4][0][0], array1[0][3], array1[1][0], array1[0][1], array1[2][0], array1[2][1] , array2[3][0], array2[4][1], array1[0][2]);

