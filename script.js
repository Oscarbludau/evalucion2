
 
 const words = ['californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane', 'peppers', 'unlimited', 'arcadium', 'love', 'getaway', 'stadium', 'quixoticelixer', 'quarter', 'snow', 'dylan', 'zephyr', 'funky', 'chili'


];


//variables globales

var palabraAleatoria = document.querySelector("#randomWord");
var palabraRandom;
var time = 10;
var score = 0;


//funciones


function randomWords () {
    let i = Math.floor(Math.random()*words.length);
    palabraRandom = words[i];
}

function addToDom () {
    randomWords ();
    palabraAleatoria.innerHTML = palabraRandom;
}

addToDom ();

var tiempoMostrado = document.querySelector("#timeSpan");

var palabraIngresada = document.querySelector("#text");

tiempoMostrado.innerHTML = time + "s";

//A continuación, en el segundo if, se compara el value del input con el inner del título que muestra la palabra aleatoria, para comprobar si la respuesta escrita es correcta.
palabraIngresada.addEventListener("keypress", function (e) { 
    console.log(e);
    if (event.key == "Enter") {if (palabraIngresada.value == palabraAleatoria.innerHTML) {
    (time += 3); 
    tiempoMostrado.innerHTML = time + "s";
    (palabraIngresada.value = ""); 
    addToDom();
    updateScore();
    } else { 
    (palabraIngresada.value = ""); 
    addToDom()}} 
    }
);

function actualizarTiempo () {
    if (time === 0) {
        clearInterval(timeInterval);
        scoreFinal = scoreMostrado.innerHTML;
        gameOver();
    } else {
    time --;
    tiempoMostrado.innerHTML = time + "s";
    }
};

let timeInterval = setInterval (actualizarTiempo, 1000);

var scoreMostrado = document.querySelector("#score");
scoreMostrado.innerHTML = score;

function updateScore () {
    score ++;
    scoreMostrado.innerHTML = score;  
};

var contenedorGameOver = document.querySelector("#end-game-container");

var divisionPrincipal = document.querySelector(".main");

function gameOver () {
    var tituloSinTiempo = "<h2>TE HAS QUEDADO SIN TIEMPO!!!</h2>";
    var scoreFinal = scoreMostrado.innerHTML;
    var parrafoPuntajeFinal = `<p>TU PUNTAJE FINAL ES DE: ${scoreFinal} PUNTOS</p>`;
    var botonVolveAEmpezar = "<br>" + '<button onclick="location.reload()">Volvé a empezar</button>';
    contenedorGameOver.innerHTML = tituloSinTiempo + parrafoPuntajeFinal + botonVolveAEmpezar;
    divisionPrincipal.innerHTML = "";
};

