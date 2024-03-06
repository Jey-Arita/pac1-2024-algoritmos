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

const pendientes = [
    'Tarea',
    'Comer',
    'Ir con la novia',
    'Estudiar Programacion'
];

//Otra variante del for, For...int
/*
for(let pendiente in pendientes){
    console.log(pendiente);
}
*/


//Puede servir para sacar de un arreglo el nombre de las columnas
for(let producto in carrito[0]){
    console.log(producto);
}