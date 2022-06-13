const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
var sonic1 = document.querySelector('.sonic1')
const respostas = [
 'não sei também',
 'algum dia vou saber',
 'espero que seu amigo saiba',
 'se ele não sabe, imagina eu',
  ]

// clicar em fazer pergunta
function fazerPergunta(){

  if(inputPergunta.value == ''){
    sonic1.src = 'https://s8.gifyu.com/images/sumiu.gif';

    return
  }
    else{
      sonic1.src = 'https://s8.gifyu.com/images/marioe013878534f1e030.gif';
    }
    

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
  
  //sumir a resposta depois de 3s
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
  }, 3000)


 }
