//Eventos para imputs o botones

//Evento keydown, nos dice las veces que precionamos una tecla
const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo');
});


//Evento keyup: es cuando dejamos de precionar una tecla
busqueda.addEventListener('keyup', () => {
    console.log('Dejando de Escribir');
});

//Evento blur: es cuando salimos del boton en que estamos trabajando
busqueda.addEventListener('blur', () => {
    console.log('Salir del Campo');
});

//Evento copy: Nos permite saber si estamos copiando los datos del archivo
busqueda.addEventListener('copy', () => {
    console.log('Texto copiado');
});

//Evento paste: que sabe si pegamos un texto copiado
busqueda.addEventListener('paste', () => {
    console.log('Texto Pegado');
});

//Evento cut: este evento sabe si cortamos algo
busqueda.addEventListener('cut', () => {
    console.log('Texto cortado');
});


//Evento General input: hace todos los demas menos el de blur
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
});

