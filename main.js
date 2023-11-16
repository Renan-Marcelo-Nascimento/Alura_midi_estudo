function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;



while (contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1;
    
    console.log(contador);
}
