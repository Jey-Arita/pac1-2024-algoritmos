//Eventos cuando damos click con el mouse

const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => {
    console.log('Click en Nav');
});

// Evento que sabe si estamos sobre en un elemento, nos funciona para interactuar sobre donde esta el mouse
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'red';
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

//Evento mause dowm, es cuando presionamos el mouse, solamente cuando estamos precionamos el mouse, cuando quitamos el click se quita

nav.addEventListener('mousedown', () => {
    console.log('Mouse Domw nav');
})
nav.addEventListener('mouseup', () => {
    console.log('Mouse up nav');
})

