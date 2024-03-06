const planilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 13000},
    {nombre: 'Marco Rodriguez', sueldoBase: 18000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 21000},
];

// Buscar por filtro con filter, devuelve un arreglo de lo que encuentra

let resultado;

resultado = planilla.filter(empleado => empleado.sueldoBase >= 15000);
console.log(resultado);

console.log('-----------------------------------------------------------');

resultado = planilla.filter(empleado => empleado.sueldoBase <= 15000);
console.log(resultado);

console.log('-----------------------------------------------------------');

resultado = planilla.filter(empleado => empleado.nombre === 'Carlos Lopez');
console.log(resultado);

console.log('-----------------------------------------------------------');

resultado = planilla.filter(empleado => empleado.nombre === 'Carlos Lopez');
console.log(resultado);

//Hacer un filtro donde solo busque por nombre colocando nombre y apellido con split y filter

console.log('-----------------------------------------------------------');

resultado = planilla.filter(empleado => empleado.sueldoBase >= 15000 && empleado.sueldoBase <= 20000);
console.log(resultado);
