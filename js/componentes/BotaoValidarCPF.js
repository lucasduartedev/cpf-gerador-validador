
import calcularDigitos from "./CalcularDigitos.js";

const BotaoValidarCPF = () => {

}

let validarCpf = (cpf) => {

    let cpfInformado = [...cpf];

    cpfInformado.pop();
    cpfInformado.pop();

    let cpfValidado = calcularDigitos(cpfInformado);
    
    if([...cpf].join('') == cpfValidado.join('')) {
        console.log(`CPF Válido!`);
    } else {
        console.log(`CPF Inválido!`);
    }

}

export default BotaoValidarCPF;
