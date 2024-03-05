const plantilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 13000},
    {nombre: 'Marco Rodriguez', sueldoBase: 18000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 21000},
];

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
];

const nombreMes = 'Febrero';

meses.forEach((mes, index) => {
    if( mes === nombreMes){
        console.log(`${nombreMes} tiene el indice ${index+1}`);
    }
})

const indice = meses.findIndex(mes => mes === nombreMes);
console.log(indice);

const indice2 = plantilla.findIndex(empleado => empleado.nombre === 'Maria Mejia');
console.log(`Empleado encontrado en el indice ${indice2}`);