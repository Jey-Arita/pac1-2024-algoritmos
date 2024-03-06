// ForEach

const pendientes = [
    'Tarea',
    'Comer',
    'Ir con la novia',
    'Estudiar Programacion'
];

// pendientes.forEach(pendientes => console.log(pendientes));

//Sacar el numero del recorrido que llevamos en un forEach
pendientes.forEach((pendientes, index) => {
    console.log(`Pendiente No. ${index+1}`);
});

console.log('------------------------------------------');

const carrito = [
    {
        nombre: 'Semitas',
        precio: 18,
    },
    {
        nombre: 'Cafe',
        precio: 130,
    },
    {
        nombre: 'Leche',
        precio: 30,
    }
];

// Recorrer con el ForEach con el carrito

carrito.forEach((producto, index) =>{
    console.log(`Producto No. ${index+1}: ${producto.nombre} a L ${producto.precio}`);
})
console.log('------------------------------------------');

// Recorrer con el Map que devuelve un arreglo
const nuevoCarrito = carrito.map((producto) => {
    return producto.nombre;
});

console.table(nuevoCarrito);

console.log('------------------------------------------');

//Destruccturacion

const nuevoCarrito2 = carrito.map(({nombre, precio}) => {
    return `${nombre} - ${precio}`;
});

console.table(nuevoCarrito2);

console.log('------------------------------------------');