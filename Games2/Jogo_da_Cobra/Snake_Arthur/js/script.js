// elemento roda jogo
let canvas = document.getElementById("gamesnake");
let context = canvas.getContext("2d");
let box = 32;
let pontos = 0;

// kobrinha
let snake = [];

// início kobrinha
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

// direção
let direction = "right"

// comida
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// fundo
function criarBG() {
    context.fillStyle = "black"
// desenha retângulo usnado x e y
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// cria kobrinha
function criaCobrinha (){
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "blue"
        
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

// desenha comida
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// detecta e chama a função update, quando acontece evento
document.addEventListener('keydown', update);

function update(event) {
    console.log(event.keyCode);
    if (event.keyCode == 65 && direction != 'right') direction = 'left';
    if (event.keyCode == 87 && direction != 'down') direction = 'up';
    if (event.keyCode == 68 && direction != 'left') direction = 'right';
    if (event.keyCode == 83 && direction != 'up') direction = 'down';
}

// função principal
function iniciarJogo() {
    if (snake[0].x > 15*box && direction == "right") {
        snake[0].x = 0;
    }
    if (snake[0].x < 0 && direction == "left") {
        snake[0].x = 16 * box;
    }
    if (snake[0].y > 15*box && direction == "down") {
        snake[0].y = 0;
    }
    if (snake[0].y < 0 && direction == "up") {
        snake[0].y = 16 * box;
    }

    for (i = 1; i < snake.length; i++) {
        document.getElementById("pnts").innerText = pontos + " pontos" 
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over >:O')
        }
    }

    criarBG();
    criaCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box; 
    if (direction == "left") snakeX -= box; 
    if (direction == "up") snakeY -= box; 
    if (direction == "down") snakeY += box;
    
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); 
    } else {
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
        pontos += 1;
    }

    let newHead ={
        x: snakeX,
        y: snakeY
    }
// método unshift adiciona como primeiro quadrinho da cobrinha
    snake.unshift(newHead)
}

let jogo = setInterval(iniciarJogo, 90);