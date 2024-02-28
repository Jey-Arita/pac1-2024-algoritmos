"use strict";

const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
};

//Con esta linea no permitimos que un objeto se pueda modificar de ninguna manera
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
