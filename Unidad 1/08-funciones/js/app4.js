function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda Funcion');
    usuarioAutenticado();
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario....espere...');
    console.log(`Usuario autenticando correctamente: ${usuario}`);
}