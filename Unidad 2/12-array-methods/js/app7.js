const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
];

const meses2 = [
    'Agosto',
    'Septiembre',
];

// Concat podemos concatenar dos arreglos en un solo arreglo


const meses3 = [
    'Octubre',
    'Nombiembre',
];

const resultado = meses.concat(meses2, meses3 , 'Septiembre');
console.log(resultado);


// Este es el speed operator ... que tambien sirve para conctatenar
const resultado2 = [...meses, ...meses3, ...meses3,'Diciembre'];
console.log(resultado2);