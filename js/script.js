let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 33;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] = {
    x: 8 * box,
    y: 8 * box,
};

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
};

const foodImg = new Image();
foodImg.src = '../image/food-apple.png';


let snake_color = '';

function buttonBlueSnake(){

       var blue_snake = document.querySelector("#button-blue-snake");
     
            snake_color = blue_snake.value;
}

function buttonGreenSnake(){

    var green_snake = document.querySelector("#button-green-snake");
  
         snake_color = green_snake.value;
}

function buttonYellowSnake(){

    var yellow_snake = document.querySelector("#button-yellow-snake");
  
         snake_color = yellow_snake.value;
}


function buttonRedSnake(){

    var red_snake = document.querySelector("#button-red-snake");
  
         snake_color = red_snake.value;
}

function buttonWhiteSnake(){

    var white_snake = document.querySelector("#button-white-snake");
  
         snake_color = white_snake.value;
}

function buttonPurpleSnake(){

    var purple_snake = document.querySelector("#button-purple-snake");
  
         snake_color = purple_snake.value;
}

function buttonPinkSnake(){

    var pink_snake = document.querySelector("#button-pink-snake");
  
         snake_color = pink_snake.value;
}

let score = 0; // Contador de peças (Score do Jogador)

function drawScore() {
    context.fillStyle = '#FFF';
    context.font = '1rem Arial';
    context.fillText(snake.length, 2 * box, 1.6 * box);
}




let tema_color = "";

function tradeClassicTema(){
    var classic_tema = document.querySelector("#trade-classic-tema");

    tema_color = classic_tema.value;

}

function tradeDarkTema(){
    var dark_tema = document.querySelector("#trade-dark-tema");


    tema_color = dark_tema.value;

}


function tradeLandTema(){
    var land_tema = document.querySelector("#trade-land-tema");


    tema_color = land_tema.value;

}





/*
function tradeAnimationTema(){
  

}
*/


function criarBG() {
    context.fillStyle = 'black'
    context.fillStyle = tema_color;
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = snake_color;
        context.fillRect(snake[i].x, snake[i].y, box, box);


    }
}



function drawFood() {
    // fillStyle = "blue";
    // context.fillRect(food.x, food.y, box, box);
    context.drawImage(foodImg, food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function iniciarJogo() {

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over :(');

        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
    drawScore();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); //pop tira o último elemento da lista
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY,
    };

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, 100);