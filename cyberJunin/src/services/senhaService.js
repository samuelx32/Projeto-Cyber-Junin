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

    // Verifica o comprimento da senha
    if (senha.length >= comprimentoMinimo) {
        pontuacao += 2;
    } else {
        return { forca: 'Fraca', mensagem: 'A senha deve ter pelo menos 8 caracteres' };
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
        return { forca: 'Fraca', mensagem: 'Senha fraca, deve conter letras minúsculas, maiúsculas, números e caracteres especiais' };
    } else if (pontuacao <= 6) {
        return { forca: 'Média', mensagem: 'Senha de média força, considere adicionar mais letras, números ou caracteres especiais' };
    } else {
        return { forca: 'Forte', mensagem: 'Senha forte' };
    }
}

module.exports = {
    verificarForcaSenha
};