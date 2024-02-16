const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//Agregar a un arreglo
// meses[6] = 'Julio';

//Nos genera un problema si quiero agregar algo al principio del arreglo, entonces asi se soluciona
//Agregamos asi al final de un arreglo con la funcion de push
meses.push('Julio');

//Agregar un elemento al principio de un arreglo
meses.unshift('Enero');


console.log(meses);


//Areglo vacio
const carrito = [];

const producto = {
    nombre: 'Roblox',
    precio: 10,
    cantidad: 1,
}

const producto2 = {
    nombre: 'FC EA',
    precio: 60,
    cantidad: 1,
}

const producto3 = {
    nombre: 'Sobres FC',
    precio: 90,
    cantidad: 1,
}

carrito.push(producto, producto2);
carrito.unshift(producto3);

console.log(carrito);
