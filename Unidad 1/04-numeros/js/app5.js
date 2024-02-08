// Idetificar el tipo de dato en el que estoy trabajando

const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Dos'
const numero4 = 30;

console.log(numero1, typeof(numero1));

console.log(Number.parseInt(numero1), typeof(Number.parseInt(numero1)));
console.log(Number.parseFloat(numero2), typeof(Number.parseFloat(numero2)));
console.log(Number.parseFloat(numero3), typeof(Number.parseInt(numero3)));
console.log(Number.parseInt(numero1)+Number.parseInt(numero3));

// Revisar si un numero es entero

console.log(Number.isInteger(numero4));


//Redondear una cifra a las cifras que quiero
let numero5 = 27.77777
console.log(numero5.toFixed(1));
console.log(numero5.toFixed(2));
console.log(numero5.toFixed(3));
console.log(numero5.toFixed(4));
