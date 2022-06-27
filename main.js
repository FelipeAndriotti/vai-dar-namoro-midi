function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
        element.play();
    }

    else {
        console.log ('Elemento ou seletor inválido');
    }

}

const keyList = document.querySelectorAll ('.tecla');

for (let contador = 0; contador < keyList.length; contador++) {
    
    const tecla = keyList[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; 

    tecla.onclick = function () {
        playSound(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code === 'Enter' || event.code ==='Space') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
