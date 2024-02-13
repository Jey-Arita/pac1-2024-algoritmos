const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};

//Acceder a los valores del objeto
producto.precio = 4500;
producto['nombre'] = 'Moto';

//Acceder a los valores del objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto['modelo']);