let elemento;

elemento = document;

elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;

//Me devuelve un arreglo
elemento = document.forms;
elemento = document.forms[0];

//Me devuelve un ID
elemento = document.forms[0].id;

//El metodo que esta utilizando ya sea GET o POST
elemento = document.forms[0].method;

//Me devuelve links en un arreglo
elemento = document.links;
elemento = document.links[4].classList;

//Nos devuelve en string solo las clases de ese arreglo
elemento = document.links[4].className;

//Elemento que me devuelve las imagenes en forma de arreglo
elemento = document.images;
elemento = document.images[2];

//Me devuelve los Scrips
elemento = document.scripts

console.log(elemento);