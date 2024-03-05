//Variante del ciclo for for...of
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
];

//le ponemos el limitante de la cantidad que tiene el arreglo

for(let producto of carrito){
    console.log(producto);
}