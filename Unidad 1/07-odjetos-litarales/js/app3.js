const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};

// Agregar propiedades a un objeto
producto.color = 'Rojo';

//Eliminar una propiedad
delete producto.precio;

console.log(producto);