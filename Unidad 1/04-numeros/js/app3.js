let resultado;

// PI
resultado = Math.PI;
console.log(`PI: ${resultado}`);

//Redondear valores a enteros
resultado = Math.round(2.9);
resultado = Math.round(2.1);
resultado = Math.round(2.5);

console.log(resultado);

//Redondear hacia arriba para hacer un valor entero
resultado = Math.ceil(2.1);
console.log(resultado);

//Redondear hacia abajo para hacer un valor entero
resultado = Math.floor(64.9);
console.log(resultado);

let raiz = 64;
//Raiz Cuadrada
resultado = Math.sqrt(raiz);
console.log(`La raiz cuadrada de ${raiz} es: ${resultado}`);

//Elevar numeros a una potencia


resultado = 4;
console.log(`El resultado de elevar 8 a la 2 es:${Math.pow(resultado, 2)}`);

// Sacar el valor minimo
resultado = Math.min(7,10,15,11,20);
console.log(`El valor minimo es: ${resultado}`);

// Sacar el valor Maximo
resultado = Math.max(7,10,15,11,20)
console.log(`El valor Maximo es: ${resultado}`);

//Numero aleatorio
resultado = Math.random();
resultado = Math.random() * 20;
resultado = Math.round(Math.random() * 20);
console.log(`Aleatorio:`,resultado);