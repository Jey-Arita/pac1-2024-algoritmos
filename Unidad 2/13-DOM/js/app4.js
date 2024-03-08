const card = document.querySelector('.card');
console.log(card);


// Aqui llamamos con queryselector para llamar a una clase mas espesifica
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar un segundo elemento 
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard);

//Seleccionar con ID
const formularios = document.querySelector('#formulario');
console.log(formularios);