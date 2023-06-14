// elemento roda jogo
let canvas = document.getElementById("gamesnake");
let context = canvas.getContext("2d");
let box = 16;
let pontos = 0

// kobrinha
let snake = [];

// início kobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// direção
let direction = "right"

// comida
let food = {
    x: Math.floor(Math.random() * 30 + 1) * box,
    y: Math.floor(Math.random() * 30 + 1) * box
}

// fundo
function criarBG() {
    context.fillStyle= "rgba(0, 0, 0, .6)"
    // desenha retângulo usnado x e y
    context.fillRect(0, 0, 32 * box, 32 * box);
}

// cria kobrinha
function criaCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "white"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

// desenha comida
function drawFood() {
    context.fillStyle = "purple"
    context.fillRect(food.x, food.y, box, box)
}

// detecta e chama a função update, quando acontece evento
document.addEventListener('keydown', update);


function update(event) {
    if (event.keyCode == (37 || 65) && direction != 'right') direction = 'left';
    if (event.keyCode == (38 || 87) && direction != 'down') direction = 'up';
    if (event.keyCode == (39 || 68) && direction != 'left') direction = 'right';
    if (event.keyCode == (40 || 83) && direction != 'up') direction = 'down';
}

// função peincipal
function iniciarJogo() {
    if (snake[0].x > 32 * box && direction == "right") {
        snake[0].x = 0;
    }
    if (snake[0].x < 0 && direction == "left") {
        snake[0].x = 32 * box;
    }
    if (snake[0].y > 32 * box && direction == "down") {
        snake[0].y = 0;
    }
    if (snake[0].y < 0 && direction == "up") {
        snake[0].y = 32 * box;
    }

    for (i = 1; i < snake.length; i++) {
        document.getElementById("pnts").innerText = pontos + " pontos"
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            document.getElementById("pnts").innerText = "Após " + pontos + " pontos você perdeu"
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
        // pop tira o último elemento da lista
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        pontos += 1
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    // método unshift adiciona como primeiro quadrinho da cobrinha
    snake.unshift(newHead)
}

let jogo = setInterval(iniciarJogo, 100)

function restart() {
    resposta = confirm('Você deseja recomeçar?')
    if (resposta) {
        jogo = setInterval(0)
    }

}