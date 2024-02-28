//Concatenar variables o strings

const producto = 'Mouse DEll';
const precio = 'L 299.99';

console.log(producto.concat(' ').concat(precio).concat(' ').concat('antes L 300'));

console.log(producto + ' ' + precio + ' antes L 300');
console.log(producto ,  precio , 'antes L 300');

// template string o Template Literals

console.log(`El producto ${producto} tiene un precio de ${precio}`);
