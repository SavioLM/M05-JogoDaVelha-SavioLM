let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 'X';
let jogoAtivo = true;
let pontosX = 0;
let pontosO = 0;

const inicializarTabuleiro = () => {
    const gradeElemento = document.getElementById('grade');
    for (let i = 0; i < 9; i++) {
        const celula = document.createElement('div');
        celula.className = 'celula';
        celula.textContent = tabuleiro[i];
        celula.onclick = () => Clique(i);
        gradeElemento.appendChild(celula);
    }
};

const atualizarTabuleiro = () => {
    const gradeElemento = document.getElementById('grade');
    for (let i = 0; i < 9; i++) {
        gradeElemento.children[i].textContent = tabuleiro[i];
        }
};

const verificarVencedor = () => {
    const padroesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    for (const padrao of padroesVitoria) {
        const [a, b, c] = padrao;
        if (tabuleiro[a] !== '' && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            return true;
      }
    }
    return false;
};

const verificarEmpate = () => {
    return tabuleiro.every(celula => celula !== '');
};

const trocarJogador = () => {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
};

const Clique = (indice) => {
    if (!jogoAtivo || tabuleiro[indice] !== '') {
        return;
    }

    tabuleiro[indice] = jogadorAtual;
    atualizarTabuleiro();

    if (verificarVencedor()) {
        alert(`Jogador ${jogadorAtual} venceu!`);
        if (jogadorAtual === 'X') {
            pontosX++;
            document.getElementById('pontos-x').textContent = pontosX;
        } 
        else {
            pontosO++;
            document.getElementById('pontos-o').textContent = pontosO;
        }
        jogoAtivo = false;
    } 
    else if (verificarEmpate()) {
        alert('Empate!');
        jogoAtivo = false;
    }
    else {
        trocarJogador();
    }
};

const resetarJogo = () => {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogoAtivo = true;
    atualizarTabuleiro();
};

const resetarPlacar = () => {
    pontosX = 0;
    pontosO = 0;
    document.getElementById('pontos-x').textContent = pontosX;
    document.getElementById('pontos-o').textContent = pontosO;
};

inicializarTabuleiro();