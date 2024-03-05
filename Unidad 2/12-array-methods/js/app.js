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

// meses.forEach((mes) => {
//     if(meses === nombreMes){
//         console.log(`El mes de ${nombreMes} existe`);
//     }
// })

const resultado = meses.includes(nombreMes);

if(meses.includes(nombreMes)){
    console.log(`El mes de ${nombreMes} existe`);
}else{
    console.log(`El mes de ${nombreMes} no existe`);
}

// console.log(resultado);

const plantilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 13000},
    {nombre: 'Marco Rodriguez', sueldoBase: 18000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 21000},
];


//Ver que hace la funcion some
const existe = plantilla.some((empleado) => empleado.nombre === 'Maria Mejia');
console.log('Empleado:',existe);

//Some Funciona con 

const existe2 = meses.some((mes) => mes==nombreMes);
console.log('Mes:', existe2);

