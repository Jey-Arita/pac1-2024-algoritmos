"use strict";

const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};

Object.freeze(producto);

/* Agregar propiedades a un objeto
producto.disponible = true;

 Borrar propiedades a un objeto
delete producto.precio;
*/

// No se puede editar nada cuando esta frizado
//producto.precio = 5000;

//console.log(producto.precio);

//Validar que un objeto este congelado
console.log(Object.isFrozen(producto));
