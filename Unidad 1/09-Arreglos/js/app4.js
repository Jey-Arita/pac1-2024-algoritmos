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

//Tenemos que usar let en el arreglo y ... donde con esto agregamos al principio o al final del arreglo


//Agregamos al final del arreglo
carrito = [...carrito,producto];
carrito = [...carrito,producto2];
//Agregamos al principio del arreglo
carrito = [producto3, ...carrito];



console.log(carrito);