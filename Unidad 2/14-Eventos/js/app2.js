//Evento click: cuando damos click con el mouse

const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => {
    console.log('Click en Nav');
});

// Evento mouseenter: sabe si pasamos el mouse sobre en un elemento, nos funciona para interactuar sobre donde esta el mouse
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'red';
})

//Evento mouseout: es cuando quitamos el mouse del evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

//Evento: mausedowm, es cuando presionamos el mouse, solamente cuando estamos precionamos el mouse, cuando quitamos el click se quita

nav.addEventListener('mousedown', () => {
    console.log('Mouse Domw nav');
})
nav.addEventListener('mouseup', () => {
    console.log('Mouse up nav');
})


// Evento de DOble Click se llama: dblclick
nav.addEventListener('dblclick', () => {
    console.log('Doble Click');
});

//Se recomienda poner la condicion dentro del evento, no ponerla antes del evento