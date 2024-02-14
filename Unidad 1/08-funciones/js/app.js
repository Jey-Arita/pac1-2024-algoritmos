// Cuando una funcion pasa de 15 lineas no es recomendable

// Declaracion de la funcion (function declaration)

function sumar(){
    console.log(2 + 2);
}

sumar();

// Exprecion de una funcion (funtion espression) | Hoisting 

const sumar2 = function() {
    console.log(3+3);
}

sumar2();

/*
La declaracion de la funcion se puede usar en cualquier parte del codigo
pero la expresion de la funcion no se puede declarar antes de la declaracion de la funcion
*/

