const personas = [   
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 21,
    },
    {
        nombre: 'Maria',
        apellido: 'Mejia',
        edad: 23,
    },
    {
        nombre: 'Marlen',
        apellido: 'Lopez',
        edad: 18,
    },
    {
        nombre: 'Ricardo',
        apellido: 'Rodriguez',
        edad: 22,
    } 
]


//El foreach no retorna nada

//map si retorna

const nuevoArreglo = personas.map((persona) => {
    return `${persona.nombre} ${persona.apellido}`;
});
const nuevoArreglo2 = personas.map((persona) => {
    return {
        nombreCompleto: `${persona.nombre} ${persona.apellido}`, edad:persona.edad
    }
});

// Aqui veremos que no retorna nada

const nuevoArreglo3 = personas.forEach((persona) => {
    return `${persona.nombre} ${persona.apellido}`;
});
const nuevoArreglo4 = personas.forEach((persona) => {
    return {
        nombreCompleto: `${persona.nombre} ${persona.apellido}`, edad:persona.edad
    }
});


console.log(nuevoArreglo);
console.log(nuevoArreglo2);
console.log(nuevoArreglo3);
console.log(nuevoArreglo4);

//lo Utilizaremos cuando queremos re organizar un arreglo de una manera nueva