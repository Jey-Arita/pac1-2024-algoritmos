/* operadores mayor que > 
menor que <
mayor o igual >=
menor o igual <=
*/

const dinero = 800;
const totalPagar = 350;
const edad = 18;

if(edad >= 18){
    if(dinero > totalPagar){
        console.log('Proceder a realizar el pago');
    }else{
        console.log('Fondos insuficientes');
    }
}else{
    console.log('No tiene edad suficiente');
}
