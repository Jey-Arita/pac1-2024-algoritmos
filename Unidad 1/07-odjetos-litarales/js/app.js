// Objetos


// Podemos ingresar propiedades y valor
const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};

// console.log(producto);


// Podemos ver la propiedades que tenemos dentro del objeto por medio de un arreglo (Izquierda)
console.log(Object.keys(producto));


// Podemos ver los valores de las propiedades dentro del objeto por medio de un arreglo (Derecha)
console.log(Object.values(producto));

// Retornar todo de un objeto
console.table(Object.entries(producto));