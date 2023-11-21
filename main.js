function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
        
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    //busca o elemento na lista de teclas e atribui a classe que foi informada na lista na posição 1
    const instrumento = tecla.classList[1];
    //criamos uma constante para concatenar a stringsom e o resto da classe pra formar o id do Audio  com crase e ${} para variaveis  
    const idAudio = `#som_${instrumento}`
    //Pega a lista de tecla em ordem e atribui a função de tocar som para ela
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento){

       
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
