const nombre = 'Juan Rodrigo Perez Mejia';

// Reemplazar el texto por otro
console.log(nombre.replace('Rodrigo','R.'));
console.log(nombre.replace(' ',"-"));

// Extraer una parte de una cadena de texto
console.log(nombre.slice(0, 10));
console.log(nombre.slice(10));
console.log(nombre.slice(2,1));

// Alternativa a slice
console.log(nombre.substring(0,10));
console.log(nombre.substring(2,1));
console.log(nombre.substring(10));

const usuario = 'Juan Perez';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
