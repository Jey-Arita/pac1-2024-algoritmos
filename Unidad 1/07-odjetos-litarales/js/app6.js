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

const { nombre } = producto;
const { informacion } = producto
const { informacion: { fabricacion: { pais } } } = producto;

console.log(pais);

