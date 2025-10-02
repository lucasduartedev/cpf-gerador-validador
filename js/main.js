
let msg = (msg) => {
    console.log(msg);
}

let numerosGerados = [];

let calcularDigitos = (numeros) => {

    while(numeros.length < 11) {
        
        let listaSomada = 0;
        let multiplicador = numeros.length + 1
        
        for (let i = 0; i < numeros.length; i++) {
            listaSomada += numeros[i] * multiplicador--;
        }

        // Resto da divisão para calcular o digito verificador
        let restoDivisao = listaSomada % 11;
        numeros.push(restoDivisao < 2 ? 0 : 11 - restoDivisao);

    }

    return numeros;
}

let gerar_cpf = () => {
    // gerar 9 numeros
    for(let i = 0; i < 9; i++) {
        numerosGerados.push(parseInt(Math.random() * 10));
    }

    return calcularDigitos(numerosGerados);

}

gerar_cpf();
console.log(numerosGerados);

let cpfNovo = numerosGerados.join("");
console.log(`CPF gerado: ${cpfNovo}`);
