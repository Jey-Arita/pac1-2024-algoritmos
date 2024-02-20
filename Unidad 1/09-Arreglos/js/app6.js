const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 21,
}

//Extraer de un objeto
const {edad} = persona;

// console.log(edad);


//EXtrare de un arreglo
const numeros = [100, 200, 300 , 400, 500];
const [primero, segundo] = numeros;
const [,,tercero] = numeros;
const [uno,dos, ...resultado] = numeros;

// console.log(tercero);
console.log(resultado);

