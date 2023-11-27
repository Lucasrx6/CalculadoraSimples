let tela = document.getElementById('tela');/* Aqui é declarado a tela da Calculadora */

function DigitoTela(value) {/* Função que atribui o valor do botão para a tela*/
    tela.value += value;
}

function limparTela() { /* Botão que seta um valor em branco para a tela - limpa a tela */
    tela.value = '';
}

function calculaResultado() { /* Função para realizar o calculo */
    try {
        tela.value = eval(tela.value);
    } catch (error) {
        tela.value = 'Erro';
    }
}
