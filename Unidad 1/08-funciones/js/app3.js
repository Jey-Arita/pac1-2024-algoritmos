function sumar(a,b){ // Aqui recibo los PARAMETROS de la funcion
    console.log(a+b);
}
sumar(3,5); // Cuando la llamo le mando el ARGUMENTO a la funcion
//Los argumentos siempre van a cambiar, pero los parametros no

sumar(3,2);

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan', 'Perez');