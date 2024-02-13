"use strict";

const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};


// Sellar un objeto donde podemos editar sus valores pero no podemos modificar sus propiedades
Object.seal(producto);

producto.precio = 5000;
/* No podemos agregar ni eliminar
//delete producto.precio;
producto.imagen = 'La_imagen.jpj';
*/

// Verificar si el objeto esta sellado

//console.log(Object.isSealed(producto));

console.log(producto);