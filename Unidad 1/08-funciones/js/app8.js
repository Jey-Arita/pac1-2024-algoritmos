const aprendiendo = function (lenguaje, tema) {
    // console.log(`Aprendiendo ${lenguaje} y ${tema}`);
}

// aprendiendo('JavaScript', 'Funciones');

const aprendiendo2 = (lenguaje, tema) => `Aprendiendo ${lenguaje} y ${tema}`;

console.log(aprendiendo2('JavaScript', 'Funciones'));


//Cuando recibe solo un parametro podemos quitar los parentesis
const numero = value => console.log(Math.pow(value, 2));
numero(2);
