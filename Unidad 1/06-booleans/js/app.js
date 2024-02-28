//Creando los valores boleanos
const booleant1 = true;
const booleant2 = false;
const booleant3 = 'true';

console.log(booleant1);
console.log(booleant2);
console.log(booleant3);

//Ver el tipo de dato
console.log(typeof(booleant1));

//Veririficando los valores boleanos
console.log(`Boolean1 es igual a boolean2: ${booleant1 == booleant2}`);
console.log(`Boolean1 es igual a boolean3: ${booleant1 === booleant3}`);

// Otra manera de crear un valor boleano
const boolean4 = new Boolean(true);
console.log(boolean4);
