//manipular la pagina ya con JavaScrip

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

// Con el visibility: hidden; no se muestra el innerText

const encabezadoContenido = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezadoContenido);

document.querySelector('.contenido-hero h1').textContent = 'Nuevo Titulo para la pagina web';

const imagen = document.querySelector('.card img');

imagen.src = 'https://tiempo.hn/wp-content/uploads/2019/09/JOH-1-547x420.jpg';