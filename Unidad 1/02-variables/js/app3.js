// 3. por medio de constlet y = 5;

function ejemplo(){
    const x = 10;
    
    if(true){
        const x = 20;
        console.log(x);
    }

    console.log(x);
}

ejemplo();

// Const no se puede reasignar el valor

const fruta = 'Naranja';
fruta = 'Manzana';

// const mascota

console.log(fruta);