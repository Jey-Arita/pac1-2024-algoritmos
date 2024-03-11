const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//Este captura los espacios
console.log(navegacion.childNodes);
//Este no captura los espacios
console.log(navegacion.children);

//Pedir el nombre del nodo
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');
//Navegar sobre lso hijos de una clase
console.log(card.children[1].children);

card.children[1].children[1].textContent = 'Nuevo titulo';

//Navegar de un hijo a un padre
console.log(card.parentElement.parentElement);

//REcorrer entre hermanos
console.log(card);
console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);

console.log(ultimoCard.previousElementSibling);

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);