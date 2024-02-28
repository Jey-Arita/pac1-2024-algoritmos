// Iterador de incremeto de 1 a1
/*
for (let i = 0; i < 10; i++) {
    console.log(`Numero ${i}`);
    
}


for (let i = 0; i < 20; i++) {
    if(i % 2 === 0){
        console.log(`Numero ${i} es par`);
    }else{
        console.log(`Numero ${i} es impar`);
    }
    
}

*/

const carrito = [
    {
        nombre: 'Semitas',
        precio: 18,
    },
    {
        nombre: 'Cafe',
        precio: 130,
    },
    {
        nombre: 'Leche',
        precio: 30,
    }
]

// Recorrer ese arreglo

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// Es mejor recorer un arreglo con forEach o Map