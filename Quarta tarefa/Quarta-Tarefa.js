/*
Desafio: Verificar se um número é par ou ímpar.

Crie um programa que solicite ao usuário um número inteiro.
Em seguida, verifique se o número é par ou ímpar.
Exiba a mensagem "O número é par." ou "O número é ímpar." no console, dependendo do número fornecido.
*/

document.getElementById('btnEnviar').addEventListener('click', ()=> {
    let numero = document.getElementById('texto').value;
    resposta(numero);
});

const calculo = (numero) => {
    let comprovacao = numero % 2 === 0; 
    return comprovacao;
};


const resposta = (numero) => {
    let result = calculo(numero);

    if (result === true) {
        popUp = alert(`O numero digitado foi ${numero} e é um numero par.`);
    }else if (result === false) {
        popUp = alert(`O numero digitado foi ${numero} e é um numero impar`);
    }else {
        popUp = alert(`O que você digitou '${numero}' não é um numero.... porfavor tente novamente.`)
    };
};

