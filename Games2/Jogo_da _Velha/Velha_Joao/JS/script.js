
const intro = document.querySelector('.intro')
const introMusic = new Audio ('./Audio/abertura.mp3')

// Variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;

// Jogadores
let jogador1 = null;
let jogador2 = null;
let jogadorSelecionado = null;

// Personagens
let vazio = "url('img/vazio.png')";
let charmander = "url('img/charmander.png')";
let squirtle = "url('img/squirtle.png')";
let bulbasaur = "url('img/bulbasaur.png')";
let pikachu = "url('img/pikachu.png')";
let butterfree = "url('img/butterfree.png')";
let pidgeotto = "url('img/pidgeotto.png')";

// Atribui imagens para escolha do personage
let poke1 = document.getElementById('poke1');
let poke2 = document.getElementById('poke2');
let poke3 = document.getElementById('poke3');
let poke4 = document.getElementById('poke4');
let poke5 = document.getElementById('poke5');
let poke6 = document.getElementById('poke6');

//Background dos Poke
poke1.style.backgroundImage = charmander;
poke2.style.backgroundImage = squirtle;
poke3.style.backgroundImage = bulbasaur;
poke4.style.backgroundImage = pikachu;
poke5.style.backgroundImage = butterfree;
poke6.style.backgroundImage = pidgeotto;

//Container
let sectionPersonagens = document.getElementById('containerPersonagens');
let sectionTabuleiro = document.getElementById('containerTabuleiro');

sectionTabuleiro.style.display = 'none';

//Audio
intro.addEventListener('click' , IniciarPartida)
function IniciarPartida() {
    introMusic.play()
}

// Click botão 1
function clickbtn1() {
    let btn = document.getElementById('btn1');

    if (btn1 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn1 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2
            btn1 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 2
function clickbtn2() {
    let btn = document.getElementById('btn2');

    if (btn2 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn2 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn2 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 3
function clickbtn3() {
    let btn = document.getElementById('btn3');

    if (btn3 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn3 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn3 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 4
function clickbtn4() {
    let btn = document.getElementById('btn4');

    if (btn4 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn4 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn4 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 5
function clickbtn5() {
    let btn = document.getElementById('btn5');

    if (btn5 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn5 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn5 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 6
function clickbtn6() {
    let btn = document.getElementById('btn6');

    if (btn6 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn6 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn6 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 7
function clickbtn7() {
    let btn = document.getElementById('btn7');

    if (btn7 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn7 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn7 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 8
function clickbtn8() {
    let btn = document.getElementById('btn8');

    if (btn8 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn8 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn8 = "O";
        }
    }

    verificaGanhador();
}

// Click botão 9
function clickbtn9() {
    let btn = document.getElementById('btn9');

    if (btn9 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn9 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn9 = "O";
        }
    }

    verificaGanhador();
}

// Verifica ganhador
function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    // Verifica se Jogador X Ganhou 
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    // Verifica se Jogador O Ganhou 
    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    // Verifica se aconteceu empate
    if (jogadas == 9) {
        finalJogo = true;
        lblJogador.innerText = 'Empate';
        lblJogadas.innerText = '';
        return;
    }

    if (controle == 0) {
        lblJogador.innerText = 'Jogador 1';
    } else {
        lblJogador.innerText = 'Jogador 2';
    }

    lblJogadas.innerText = '(' + (jogadas + 1) + 'ª Jogada)';
}


function clickPoke(pokemonSelecionado, botao) {
    
    let btn = document.getElementById(botao);

    if (pokemonSelecionado == 'charmander') {
        jogadorSelecionado = charmander;
    } else if (pokemonSelecionado == 'squirtle') {
        jogadorSelecionado = squirtle;
    } else if (pokemonSelecionado == 'bulbasaur') {
        jogadorSelecionado = bulbasaur;
    } else if (pokemonSelecionado == 'pikachu') {
        jogadorSelecionado = pikachu;
    } else if (pokemonSelecionado == 'butterfree') {
        jogadorSelecionado = butterfree;
    } else if (pokemonSelecionado =='pidgeotto') {
        jogadorSelecionado = pidgeotto;
    }

    if (jogadorSelecionado == null) {
        alert('Erro ao selecionar o personagem');
        return;
    }


    let lblOrdemPersonagem = document.getElementById('ordemPersonagem');
    if (jogador1 == null) {
        jogador1 = jogadorSelecionado;
        btn.value = 'JOGADOR 1';
        lblOrdemPersonagem.innerText = '2º'
    } else {
        if(jogadorSelecionado== jogador1) {
            alert("personagem do jogador 2 não pode ser igual ao do jogador 1");
            return;
        }
        jogador2 = jogadorSelecionado;
        btn.value = 'JOGADOR 2';
        sectionPersonagens.style.display = 'none'
        sectionTabuleiro.style.display = 'block';
    }

}

// Click do botão Reiniciar
function clickReiniciar() {
    // Reiniciar variaveis
    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogadas = 0;
    finalJogo = false;
    

    // Reiniciar Botões
    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.value = ' ';
    b2.value = ' ';
    b3.value = ' ';
    b4.value = ' ';
    b5.value = ' ';
    b6.value = ' ';
    b7.value = ' ';
    b8.value = ' ';
    b9.value = ' ';

    b1.style.backgroundImage = vazio
    b2.style.backgroundImage = vazio
    b3.style.backgroundImage = vazio
    b4.style.backgroundImage = vazio
    b5.style.backgroundImage = vazio
    b6.style.backgroundImage = vazio
    b7.style.backgroundImage = vazio
    b8.style.backgroundImage = vazio
    b9.style.backgroundImage = vazio

    // Reiniciar Label
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');

    lblJogador.innerText = 'Jogador 1';
    lblJogadas.innerText = '(1ª Jogada)';

    //Reniciar Tabuleiro 
        sectionPersonagens.style.display = 'block'
        sectionTabuleiro.style.display = 'none';

    //Reniciar Palavra
        let lblOrdemPersonagem = document.getElementById('ordemPersonagem');
        lblOrdemPersonagem.innerText = '1º'

     //Reniciar Jogador
     jogador1 = null;
     jogador2 = null;
     jogadorSelecionado = null
     jogador1.style.backgroundImage = vazio;
     jogador2.style.backgroundImage = vazio;
        
        
}


