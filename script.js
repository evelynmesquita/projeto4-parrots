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

