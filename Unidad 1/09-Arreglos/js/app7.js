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

// for (let i = 0; i < personas.lengt; i++){
//    console.log(personas[i]);
// }

// personas.forEach(function(personas){
//     console.log(personas);
// })


personas.forEach(personas => console.log(personas));