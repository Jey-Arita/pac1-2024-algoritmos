const producto = 'Monitor de 23 pulgadas';

// repetir cadena de texto

const texto = ' en promocion'.repeat(4);
console.log(texto);

console.log(`${producto} ${texto}!!!`);

// Dividir un string
const actividad = 'estoy aprediendo a usar JavaScript en el CUROC';
console.log(actividad.split(' '));

const hobbies = 'Leer, Caminar, Musica, Jugar LOL, Dormir';
console.log(hobbies.split(','));

const xtweet = 'Aprediendo JavaScript en el CUROC #ProgramaPuma #Copan';
console.log(xtweet.split('#'));