
const reproductor = {
    reproducir: id => console.log(`Reproduciendo la cancion: ${id}`),
    pausar: () => console.log('Pausandoo musica...'),
    crearPlaylist: nombre => console.log(`Playlist ${nombre} creada`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`)
}

reproductor.borrar = id =>  console.log(`Borrando la cancion ${id}`);

reproductor.reproducir(55);
reproductor.pausar();
reproductor.crearPlaylist('Las mamalonas');
reproductor.reproducirPlaylist('Las mamalonas');
reproductor.borrar(55);