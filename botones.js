
document.addEventListener("keydown", function(event){
    const codigoTecla = event.keyCode;
    const sonido = document.querySelector(`audio[data-tecla="${codigoTecla}"]`);

    if(sonido){
        sonido.currentTime = 0;
        sonido.play();
    }
})