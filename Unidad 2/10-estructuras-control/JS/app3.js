const dinero = 400;
const totalPagar = 600;
const tarjeta = false;
const cheque = true;

if(dinero >= totalPagar){
    console.log('Se puede realizar el cobro');
}else if(tarjeta){
    console.log('Se puede pagar con su tarjeta de credito');
}else if(cheque){
    console.log('Se puede pagar con cheque');
}else{
    console.log('Fondos insuficientes');
}

const permisos = ['ADMIN','SALLER','USER'];

const usuario = {
    nombre: 'Juan Perez',
    permisos: 'USER',
}

//Recorer un arreglo con if, y me devuelve si es verdadero o falso

if(permisos.includes(usuario.permisos)){
    console.log('Si tiene permiso:', usuario.permisos);
}