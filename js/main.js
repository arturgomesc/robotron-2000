// addEventListener: manipulador de evento, adiciona ações a um ID, por exemplo. estrutura: target.addEventListener(event, function, useCapture)
// parseInt: transforma um valor string em inteiro, deixa de se comportar com concatenação e passa a ser tratado como número.
// querySelector: seleciona um elemento do HTML
// arrow functions: representadas por uma "flecha" ()=> {} , são utilizadas pra representar funções únicas que não serão reutilizadas
// forEach:
//target, textContent, parentNode

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}