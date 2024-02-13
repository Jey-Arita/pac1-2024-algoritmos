const booleant1 = true;
const booleant2 = false;
const booleant3 = 'true';

console.log(booleant1);
console.log(booleant2);
console.log(booleant3);

console.log(typeof(booleant1));

console.log(`Boolean1 es igual a boolean2: ${booleant1 == booleant2}`);
console.log(`Boolean1 es igual a boolean3: ${booleant1 === booleant3}`);

const boolean4 = new Boolean(true);
console.log(boolean4);