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

export default calcularDigitos;
