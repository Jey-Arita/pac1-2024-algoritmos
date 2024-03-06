const planilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 13000},
    {nombre: 'Marco Rodriguez', sueldoBase: 18000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 21000},
];
// funcion Find este nos devuelve nada mas un elemento o el primero que encuentre

let resultado;

resultado = planilla.find(empleado => empleado.nombre === 'Carlos Lopez');
console.log(resultado);