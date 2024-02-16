let carrito = [];

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

carrito = [...carrito,producto];
carrito = [...carrito,producto2];
carrito = [producto3, ...carrito];

//Eliminar directamnte la ultima posicion de un arreglo
// carrito.pop();

//Eliminar el primer elemento
// carrito.shift();

//Eliminar en medio de un arreglo, en la funcion ponemos los elementos y luego cuantas posiciones queremos eliminar, es practicamente un rango
carrito.splice(1,2);

console.log(carrito);