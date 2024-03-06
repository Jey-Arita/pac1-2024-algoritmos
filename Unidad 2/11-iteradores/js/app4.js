// While

let i = 1;

/*while (i <= 10) {
    console.log(`Numero ${i}`);
    i++;
}
*/

while (i <= 100) {
    if ( i % 15 == 0){
        console.log(`Numero ${i} FIZZBUZZ`);
    }else if (i % 5 == 0){
        console.log(`Numero ${i} BUZZ`);
    }
    else if(i % 3 == 0){
        console.log(`Numero ${i} FIZZ`);
    }
    i++;
}