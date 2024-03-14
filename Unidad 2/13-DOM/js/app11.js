const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

/*Agregamos un evento con funcion
btnFlotante.addEventListener('click', () => {
    console.log('Click en Btn Flotante');
});
*/

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    // console.log('Click en Btn Flotante');

//Validar si contiene una clase y si no la tiene aparecerla
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo'); //Removemos el footer de pantalla
        this.classList.remove('activo');//Removemos la clase activo que lo pone rojo
        this.textContent = 'Idioma y Moneda'//Le ponemos el texto que aparecera en pantalla

    }else{
        footer.classList.add('activo'); //Le agregamos el footer en pantalla
        //Agregar contenido grafico para una mayor interaccion con this
        this.classList.add('activo'); //le agregamos una clase
        this.textContent = 'X cerrar'; //Le agregamos texto
    }
}