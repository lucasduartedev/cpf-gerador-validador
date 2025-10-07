
import calcularDigitos from "./CalcularDigitos.js";

const BotaoValidarCPF = () => {

    // * Capturar botão validar CPF
    let botaoValidarCPF = document.querySelector('[data-botao-validar-cpf]')

    // * adicionar evento e click + função
    botaoValidarCPF.addEventListener('click', cpfCampoValidacao);

}

let cpfCampoValidacao = () => {
    let campoCpfValidacao = document.querySelector('[data-campo-cpf-validacao]');
    campoCpfValidacao.addEventListener('click', () => {
        resetarCampoValidacao(campoCpfValidacao);
    })

    let cpfValidado = validarCpf([...campoCpfValidacao.value]);

    if(cpfValidado === true) {
        campoCpfValidacao.classList.add('msg-validacao-sucesso');
        campoCpfValidacao.classList.remove('msg-validacao-fracasso');
    } else {
        campoCpfValidacao.classList.add('msg-validacao-fracasso');
        campoCpfValidacao.classList.remove('msg-validacao-sucesso');
    }
    
}

let validarCpf = (cpf) => {

    let cpfInformado = [...cpf];

    cpfInformado.pop();
    cpfInformado.pop();

    let cpfValidado = calcularDigitos(cpfInformado);
    
    if([...cpf].join('') == cpfValidado.join('')) {
        return true;
    } else {
        return false;
    }

}

let resetarCampoValidacao = (campo) => {
    campo.classList.remove('msg-validacao-fracasso');
    campo.classList.remove('msg-validacao-sucesso');
}

export default BotaoValidarCPF;
