// Desafio: Calcular a soma dos dígitos de um número.

// Crie um programa que solicite ao usuário um número inteiro positivo.
// Calcule a soma de todos os dígitos desse número.
// Exiba o resultado da soma no console.

const obterNumeroUseuario = () => {
    let numero = document.getElementById('numero').value;
    return numero
};

document.getElementById('btnEnviar').addEventListener('click', () => {
    let numero = obterNumeroUseuario();

    if (numero == '') {
        alert(`Por favor digite um numero positivo.`);
    };

    numero = parseInt(numero);

    if (isNaN(numero)){
        alert(`Complete o campo com um numero valido.`)
        return;
    }

    if (numero < 0 ) {
        alert(`${numero} não é um numero positivo, por favor ingrese um numero positivo.`);
    } else {
        let soma = 0;
        let convertString = numero.toString();
        for (let i = 0; i < convertString.length; i++) {
            soma += parseInt(convertString[i]);
        };
    
        alert(`A soma dos digitos é de ${soma}.`);
    };

});


