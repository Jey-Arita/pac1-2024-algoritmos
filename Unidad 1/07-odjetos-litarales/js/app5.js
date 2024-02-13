const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true,
    informacion: {
        medidas: {
            peso:'20 lbs',
            dimensiones: '1.5mts'
        },
        fabricacion: {
            pais: 'China',
        }
    }
}

// console.log(producto);
//Podemos acceder de forma desglosada a cada odjeto
console.log(producto.informacion.medidas.peso);