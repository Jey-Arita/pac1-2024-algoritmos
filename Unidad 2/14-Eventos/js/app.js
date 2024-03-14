//Nos indica cuando ya se inicio, podemos usar cuando aun no se ha terminado de cargar todo pero queremos mostrar un evento ya
console.log(1);

//Nos indicia cuando ya cargo todo el html, lo necesitaremos cuando queramos cuando ya se cargo todo
document.addEventListener('DOMContentLoaded', () => {
    console.log(2);
});

console.log(3);

