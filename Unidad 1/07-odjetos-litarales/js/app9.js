const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};

const medidas = {
    dimensiones: '1.5mtrs',
    peso: '20lbs',
}

console.log(producto);
console.log(medidas);


//unir dos objetos
const resultado = Object.assign(producto,medidas);

console.log(resultado);

// Usando Spread Operator o rest operator

const resultado2 = {...producto, ...medidas};
console.log(resultado2);

const resultado3 = {...producto, medidas};
console.log(resultado3);
