/*****ARRAY IMAGENS****/
const cartasImg = 
    ["media/photos/bobrossparrot.gif",
    "media/photos/explodyparrot.gif",
    "media/photos//fiestaparrot.gif",
    "media/photos/metalparrot.gif", 
    "media/photos/revertitparrot.gif",
    "media/photos/tripletsparrot.gif",
    "media/photos//unicornparrot.gif"]

/******VARIAVEIS GLOBAIS****/
let contador = 0;
let seg = 0;
let cardElemento1;
let cardImg1;
let quantidade;
let limiteCartas;
let timerInterval;

/********FUNÇÃO DE EMBARALHAR CARTAS******/
function EmbaralharCartas() { 
	return Math.random() -0.5; 
}

/********FUNÇÃO ESCOLHER QUNANTIDADE DE CARTAS*******/

function EscolherQuantidade(){
  let mostrarCartas; 
  mostrarCartas = document.querySelector(".container-cards")  
  mostrarCartas.innerHTML = ' ';
  limiteCartas = 2;
  cartasImg.sort(EmbaralharCartas)

  quantidade = Number(prompt("Escolha uma quantidade PAR de cartas entre 4 e 14!"))
  while (quantidade %2 != 0 || quantidade > 14 || quantidade < 4) {
    quantidade = prompt ("Escolha uma quantidade PAR de cartas entre 4 e 14!")  
  }

  CriarCartas()
}

/*********FUNÇÃO DE CRIAÇÃO DE CARTAS**********/

function CriarCartas(){
  let qteDeCartas = cartasImg.slice(0, quantidade/2)
  const arrayImagens = []
  
  for (i = 0; i < qteDeCartas.length; i++) {
    arrayImagens.push(qteDeCartas[i]);
    arrayImagens.push(qteDeCartas[i]);
  }
  
  arrayImagens.sort(EmbaralharCartas);
  for (let i = 0; i < quantidade; i++){
    mostrarCartas = document.querySelector(".container-cards")  
    mostrarCartas.innerHTML += `
              <div data-test="card" class="card" onclick = "VirarCartas(this)">
                <div class="front-face face">
                <img data-test="face-down-image" src="media/photos/back.png" alt="">
                </div>
                <div class="back-face face">
                <img  data-test="face-up-image" src=${arrayImagens[i]}>
                </div>
             </div>`
  }
}

/********FUNÇÃO DE VIRAR CARTAS*******/

function VirarCartas(elemento){
  if (elemento.classList.contains("to-turn")){
    return
  } else if (document.querySelectorAll(".card.to-turn").length >= limiteCartas){
    return
  }  
   
  elemento.classList.add("to-turn")
  
  let CartasViradas = document.querySelectorAll(".to-turn")
  contador++
  
  if ((CartasViradas.length)%2 !== 0){
    cardElemento1 = elemento;
    cardImg1 = cardElemento1.querySelector(".back-face img").src
  }

  if ((CartasViradas.length)%2 === 0) {
    let cardImg2 = elemento.querySelector(".back-face img").src
    CompararCartas(cardImg1, cardImg2, cardElemento1, elemento)
  }

  function CompararCartas(cardImg1, cardImg2, cardElemento1, elemento){
    if (cardImg1 != cardImg2) {
      setTimeout(function remover(){elemento.classList.remove('to-turn')
      cardElemento1.classList.remove("to-turn")} , 1000);
     
    }  
    if (cardImg1 == cardImg2){
      limiteCartas += 2
    }
    setTimeout(FinalizarPartida, 1000)
  }
}

/*********FUNÇÃO FINALIZAR PARTIDA********/

function FinalizarPartida(){
  clearInterval(timerInterval);
  let quantidadetoturn = document.querySelectorAll(".card.to-turn")
  if (quantidadetoturn.length == quantidade){
    alert(`Você ganhou em ${contador} jogadas!\nTempo: ${seg -1} segundos.`)
    ReiniciarPartida()
    seg = ''
    contador = ''
  }
}

/***********FUNÇÃO REINICIAR PARTIDA************/

function ReiniciarPartida() {
  let resposta = prompt("Gostaria de reiniciar a partida? Digite 'sim' ou 'não'")

  while (resposta !== 'não' && resposta !== 'sim'){ 
    resposta = prompt("Gostaria de reiniciar a partida? Digite 'sim' ou 'não'")
    }
  if (resposta === 'sim') { 
    EscolherQuantidade()
    setInterval(Cronometro, 10000) 
  } else if (resposta === 'não'){
    alert("Ótimo jogo! Até a próxima!")
  }
}

/*********BÔNUS CRONOMETRO - SEGUNDOS**********/

function Cronometro() {
    let segundos = document.querySelector('.relogio')
    segundos.innerHTML = `${seg++}`
  }

setInterval(Cronometro, 1000) 
EscolherQuantidade() 