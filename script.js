function mostrarMensagem() {
    const mensagem = `
        Oi Alice,<br><br>
        Eu tenho refletido muito sobre nós e quero que você saiba que me arrependo profundamente de ter terminado. 
        Não consigo parar de pensar em como tudo era bom entre nós e como eu gostaria de voltar atrás.<br><br>
        Eu sinto sua falta e espero que possamos conversar. 
        Por favor, me perdoe por minha decisão impulsiva.<br><br>
        Com carinho,<br>
        Seu gato triste atrás, miando... 😿
    `;
    const mensagemElement = document.getElementById("mensagem");
    mensagemElement.innerHTML = mensagem;
    mensagemElement.style.opacity = 1;
}
