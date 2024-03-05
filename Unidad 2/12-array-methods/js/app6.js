const planilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 13000},
    {nombre: 'Marco Rodriguez', sueldoBase: 18000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 21000},
];

// Every, devuelve todo lo que cumpla con la solucion con un balor boleano

let resultado;

resultado = planilla.every(empleado => empleado.sueldoBase <= 21000);
console.log(resultado);

