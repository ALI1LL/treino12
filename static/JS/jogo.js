// Variáveis do jogo
let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;


// Exemplo de definição das palavras e dicas
const palavras = ["cabana", "perda", "trindade","mack","fé"];
const dicas = ["É o lugar onde o protagonista encontra paz e respostas em meio à dor.", "O protagonista enfrenta um sentimento de _______ de uma filha e busca entendimento a cura, qual a palavra?..",
"Neste local, o protagonista encontra figuras que representam diferentes aspectos de Deus.","Qual protagonista luta contra a dor e a raiva após uma tragédia familiar.","Mack enfrenta suas dúvidas e medos em um encontro profundo com Deus.",
];


// Função para iniciar o jogo
function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indiceAleatorio];
    dicaAtual = dicas[indiceAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    window.tentativasRestantes = tentativasRestantes; // Tornar global
    atualizarDisplayDoJogo();
}


// Função para atualizar a exibição do jogo
function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = palavraAtual[i];
        palavraExibida += (letrasAdivinhadas.includes(letra) || letra === " ") ? letra : "_";
    }
    document.getElementById("palavra").textContent = palavraExibida;
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentadas: ${letrasAdivinhadas.join(", ")}`;
    desenharBoneco(); // Chama aqui para garantir que o boneco é desenhado
}


// Função para adivinhar a letra
function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess");
    const letraAdivinhada = entradaAdivinhacao.value.toLowerCase();
   
    if (letraAdivinhada.length === 1 && /^[a-záéíóúãöç]$/i.test(letraAdivinhada)) {
        if (!letrasAdivinhadas.includes(letraAdivinhada)) {
            letrasAdivinhadas.push(letraAdivinhada);
            let letraNaoEncontrada = true;


            if (!palavraAtual.includes(letraAdivinhada)) {
                tentativasRestantes--;
                window.tentativasRestantes = tentativasRestantes; // Atualiza global
            }


            atualizarDisplayDoJogo(); // Atualiza o display após a tentativa


            if (palavraAtual.split('').every(l => letrasAdivinhadas.includes(l) || l === " ")) {
                document.getElementById("status").textContent = "Você venceu!";
            } else if (tentativasRestantes <= 0) {
                document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}`;
            }
        }
    }


    entradaAdivinhacao.value = "";
}
function encerrarJogo() {
    alert("O jogo foi encerrado!");
    // Aqui você pode adicionar qualquer lógica adicional ao encerrar o jogo, se necessário.
}


// Iniciar o jogo quando o documento for carregado
document.addEventListener("DOMContentLoaded", iniciarJogo);

// Encerrar o jogo quando o documento chegar na resposta certa
document.getElementById("encerrarJogo").addEventListener("click", encerrarJogo);
