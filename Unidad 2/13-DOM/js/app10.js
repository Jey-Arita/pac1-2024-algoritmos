const enlace = document.querySelector('a');

//Eliminar una etiqueta que esta en html
enlace.remove();

enlace.textContent = 'Nuevo enlace';
enlace.href = '#';
//Abrir enlaces en otra pestaña
enlace.target = '_blank';

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

//Insertar en una posicion espefifica
navegacion.insertBefore(enlace, navegacion.children[1]);

//Agregar una clase
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;

function miFuncion() {
    console.log('Hiciste-Click');
}

//Crear una card desde Java scrip, se deja en mayusculas 

//Creando las etiquetas P
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('.categoria', '.concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Cocierto de los Bukis';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = 'L 800';
parrafo3.classList.add('precio');


//Crear el div
const info = document.createElement('DIV');
info.classList.add('info');

//Agregar dentro del div info los 3 parrafos
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//La imagen creandola
const imagen = document.createElement('IMG');
imagen.src = 'https://th.bing.com/th/id/OIP.1I8BQWUQDIwgqHsG4ue1NQHaHa?rs=1&pid=ImgDetMain';
imagen.alt = 'Texto de Banda';

const card = document.createElement('DIV');
card.classList.add('card')
card.appendChild(imagen);
card.appendChild(info);

//Buscamos donde queremos colocar la card
const contenedor = document.querySelector('.hacer .contenedor-cards');
//Insertar el elemento al principio
contenedor.insertBefore(card, contenedor.children[0]);