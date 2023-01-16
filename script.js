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

