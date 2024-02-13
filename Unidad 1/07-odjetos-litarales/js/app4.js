const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};

// Destructuracion de objetos

// const modelo = producto.modelo;
// const precio = producto.precio;

const {modelo,precio, disponible} = producto;

console.log(modelo);
console.log(precio);
console.log(disponible);