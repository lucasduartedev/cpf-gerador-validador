
import calcularDigitos from "./CalcularDigitos.js";

const BotaoGerarCPF = () => {

    // Capturar botao Gerar CPF
    let botaoGerarCpf = document.querySelector('[data-botao-gerar-cpf]');
    
    // adicionar evento e click + função: Gerar CPF
    botaoGerarCpf.addEventListener('click', gerar_cpf);

}

// Função: gerar o CPF & preencher resultado no campo CPF
let gerar_cpf = () => {
    
    let campoCPF = document.querySelector('[data-campo-cpf]');
    let numerosGerados = [];
    
    // gerar 9 dígitos inicias
    for(let i = 0; i < 9; i++) {
        numerosGerados.push(parseInt(Math.random() * 10));
    }

    // Adicionar dígitos verificadores
    let cpfComDigitos = calcularDigitos(numerosGerados);
    
    // .join(' ').replaceAll(' ', '')
    // Preencher resultado no campo CPF
    campoCPF.value = cpfComDigitos.join(' ').replaceAll(' ', '')
    
}

export default BotaoGerarCPF;
