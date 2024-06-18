// Função para verificar a força da senha
function verificarForcaSenha(senha) {
    // Critérios de avaliação
    const comprimentoMinimo = 8;
    const regexLetrasMinusculas = /[a-z]/;
    const regexLetrasMaiusculas = /[A-Z]/;
    const regexNumeros = /[0-9]/;
    const regexCaracteresEspeciais = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    // Pontuação inicial
    let pontuacao = 0;
    let mensagem = ''

    // Verifica o comprimento da senha
    if (senha.length >= comprimentoMinimo) {
        pontuacao += 2;
    } else {
        mensagem = 'A senha deve ter pelo menos 8 caracteres'
        return { forca: 'Fraca', mensagem };
    }

    // Verifica outros critérios
    if (regexLetrasMinusculas.test(senha)) {
        pontuacao += 2;
    }
    if (regexLetrasMaiusculas.test(senha)) {
        pontuacao += 2;
    }
    if (regexNumeros.test(senha)) {
        pontuacao += 2;
    }
    if (regexCaracteresEspeciais.test(senha)) {
        pontuacao += 2;
    }

    // Avalia a pontuação e retorna a categoria
    if (pontuacao <= 4) {
        mensagem = 'Considere adicionar letras maiúsculas, números e caracteres especiais';
        return { forca: 'Fraca', mensagem };
    } else if (pontuacao <= 6) {
        mensagem = 'Considere adicionar mais variação na sua senha';
        return { forca: 'Média', mensagem };
    } else {
        mensagem = 'Sua senha é forte! Mas não utilize a mesma senha para vários lugares.';
        return { forca: 'Forte', mensagem };
    }
}

module.exports = {
    verificarForcaSenha
};