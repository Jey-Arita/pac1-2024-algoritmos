// Los objetos pueden tener funciones

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo la cancion: ${id}`);
    },
    pausar: function() {
        console.log('Pausandoo musica...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Playlist ${nombre} creada`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`);
    }
}

// console.log(reproductor);

reproductor.reproducir(55);
reproductor.pausar();
reproductor.crearPlaylist('Las mamalonas');
reproductor.reproducirPlaylist('Las mamalonas');

reproductor.borrar = function(id){
    console.log(`Borrando la cancion ${id}`);
}

reproductor.borrar(55);