const plantilla = [
    {nombre: 'Juan Perez', sueldoBase: 14000},
    {nombre: 'Maria Mejia', sueldoBase: 13000},
    {nombre: 'Marco Rodriguez', sueldoBase: 18000},
    {nombre: 'Pedro Lara', sueldoBase: 15000},
    {nombre: 'Margarita Pineda', sueldoBase: 20000},
    {nombre: 'Carlos Lopez', sueldoBase: 21000},
];

let totalPagar = 0;

plantilla.forEach((empleado) => totalPagar += empleado.sueldoBase);
console.log(totalPagar);

//Reduce, con esto podemos recorrer un arreglo y sumar lo de un valor
let resultado = plantilla.reduce((total, empleado) => total + empleado.sueldoBase, 0);
console.log('Reduce total:' , resultado);

