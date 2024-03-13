const encabezado = document.querySelector('h1');

// console.log(encabezado.style);

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
//Hacer mayuscula el texto
encabezado.style.textTransform = 'uppercase';

// developer reload window = es para reiniciar la pagina sin cerrar presionamos control shitf y P


// Agregar una clase solo a una etiqueta
const card = document.querySelector('card');
card.classList.add('nueva-clase', 'segunda-nueva-clase');
console.log(card.classList);

//Eliminar una clase
card.classList.remove('card');