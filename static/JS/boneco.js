function desenharBoneco() {
    const forca = document.getElementById("forca");
    forca.innerHTML = "";


    // Base da forca
    const palo = document.createElement("div");
    palo.style.position = "absolute";
    palo.style.bottom = "57px";
    palo.style.left = "85%"; // Centraliza a base
    palo.style.transform = "translateX(-50%)"; // Ajusta para o centro
    palo.style.width = "2px";
    palo.style.height = "100px";
    palo.style.backgroundColor = "#333";
    forca.appendChild(palo);


    // Travessas
    const travessa = document.createElement("div");
    travessa.style.position = "absolute";
    travessa.style.top = "28px";
    travessa.style.left = "61%"; // Centraliza a travessa
    travessa.style.transform = "translateX(-50%)";
    travessa.style.width = "70px";
    travessa.style.height = "2px";
    travessa.style.backgroundColor = "#333";
    forca.appendChild(travessa);


    const travessaSuperior = document.createElement("div");
    travessaSuperior.style.position = "absolute";
    travessaSuperior.style.bottom = "156px";
    travessaSuperior.style.left = "85%"; // Centraliza a travessa superior
    travessaSuperior.style.transform = "translateX(-50%)";
    travessaSuperior.style.width = "2px";
    travessaSuperior.style.height = "60px";
    travessaSuperior.style.backgroundColor = "#333";
    forca.appendChild(travessaSuperior);


    // Cabeça
    if (tentativasRestantes <= 5) {
        const cabeca = document.createElement("div");
        cabeca.style.position = "absolute";
        cabeca.style.bottom = "165px"; // Ajustar para alinhamento
        cabeca.style.left = "50%"; // Centraliza a cabeça
        cabeca.style.transform = "translateX(-50%)";
        cabeca.style.width = "50px";
        cabeca.style.height = "50px";
        cabeca.style.border = "2px solid blue";
        cabeca.style.borderRadius = "50%";
        forca.appendChild(cabeca);
    }


    // Corpo
    if (tentativasRestantes <= 4) {
        const corpo = document.createElement("div");
        corpo.style.position = "absolute";
        corpo.style.bottom = "105px"; // Ajustar posição do corpo
        corpo.style.left = "50%"; // Centraliza o corpo
        corpo.style.transform = "translateX(-50%)";
        corpo.style.width = "2px";
        corpo.style.height = "60px";
        corpo.style.backgroundColor = "blue";
        forca.appendChild(corpo);
    }


    // Braços
    if (tentativasRestantes <= 3) {
        const bracoEsquerdo = document.createElement("div");
        bracoEsquerdo.style.position = "absolute";
        bracoEsquerdo.style.bottom = "127px"; // Ajustar para ficar em relação ao corpo
        bracoEsquerdo.style.left = "15%"; // Ajustar para o braço esquerdo
        bracoEsquerdo.style.transform = "translateY(0%) rotate(-45deg)";
        bracoEsquerdo.style.width = "60px";
        bracoEsquerdo.style.height = "2px";
        bracoEsquerdo.style.backgroundColor = "blue";
        forca.appendChild(bracoEsquerdo);
    }


    if (tentativasRestantes <= 2) {
        const bracoDireito = document.createElement("div");
        bracoDireito.style.position = "absolute";
        bracoDireito.style.bottom = "127px"; // Ajustar para ficar em relação ao corpo
        bracoDireito.style.left = "44%"; // Ajustar para o braço direito
        bracoDireito.style.transform = "translateY(0%) rotate(45deg)";
        bracoDireito.style.width = "60px";
        bracoDireito.style.height = "2px";
        bracoDireito.style.backgroundColor = "blue";
        forca.appendChild(bracoDireito);
    }


    // Pernas
    if (tentativasRestantes <= 1) {
        const pernaEsquerda = document.createElement("div");
        pernaEsquerda.style.position = "absolute";
        pernaEsquerda.style.bottom = "84px"; // Ajustado para ficar alinhado
        pernaEsquerda.style.left = "15%"; // Ajustar para a perna esquerda
        pernaEsquerda.style.transform = "translateY(0%) rotate(-45deg)";
        pernaEsquerda.style.width = "60px";
        pernaEsquerda.style.height = "2px";
        pernaEsquerda.style.backgroundColor = "blue";
        forca.appendChild(pernaEsquerda);
    }


    if (tentativasRestantes <= 0) {
        const pernaDireita = document.createElement("div");
        pernaDireita.style.position = "absolute";
        pernaDireita.style.bottom = "83px"; // Ajustado para ficar alinhado
        pernaDireita.style.left = "44%"; // Ajustar para a perna direita
        pernaDireita.style.transform = "translateY(0%) rotate(45deg)";
        pernaDireita.style.width = "60px";
        pernaDireita.style.height = "2px";
        pernaDireita.style.backgroundColor = "blue";
        forca.appendChild(pernaDireita);
    }
}





