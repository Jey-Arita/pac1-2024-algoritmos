// Ciclo for que recorra de 0 al 9, cuando escriba 5 apresca el nombre del numero

// funcion de Break
// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         console.log(`Numero ${i} == Cinco`);
//         break;
//     }else{
//         console.log(i);
//     }
// }

// funcion continue, no se utiliza casi nunca

// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         console.log(`Numero ${i} == Cinco`);
//         continue;
//     }
//     console.log(i);
// }

//imprimir los numero de 1 al 100 pero cuando haya multiplo de 2, 6, 9, 12 fizz, y multiplos de 5,10,15,20 buzz

for (let i = 1; i <= 100; i++) {
    if ( i % 15 == 0){
        console.log(`Numero ${i} FIZZBUZZ`);
    }else if (i % 5 == 0){
        console.log(`Numero ${i} BUZZ`);
    }
    else if(i % 3 == 0){
        console.log(`Numero ${i} FIZZ`);
    }
    
}