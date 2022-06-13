const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const respostas = [
  'certeza',
  'não tenho tanta certeza',
  'é decididamente assim',
  'não conte com isso',
  'sem duvidas',
  'pergunte novamente mais tarde',
  'sim definitivamente',
  'minha resposta é não',
  'voce pode contar com isso',
  'melhor não te dizer agora',
  'a meu ver, sim',
  'minhas fontes dizem não',
  'provavelmente',
  'não é possivel prever agora',
  'respecitva boa',
  'as perspectivas não tão tao boas',
  'sim',
  'concentre-se e pergunte novamente',
  'sinais apontam que sim',
  ]

// clicar em fazer pergunta
function fazerPergunta(){

  if(inputPergunta.value == ''){
    alert('Digite sua pergunta')
    return
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
