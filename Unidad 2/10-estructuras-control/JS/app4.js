const metodoPago = 'Tarjeta';

switch(metodoPago){
    case 'Efectivo':
        pagarEfectivo();
        break;
    case 'Tarjeta':
        console.log('No hay sistema');
        break;
    default:
        console.log('No ha seleccionado un metodo de pago');
        break;
}

function pagarEfectivo() {
    console.log('Pagando en efectivo....');
}