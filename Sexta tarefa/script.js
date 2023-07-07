// Desafio: Verificar se um número é primo.

// Crie um programa que solicite ao usuário um número inteiro maior que 1.
// Verifique se o número é primo, ou seja, se é divisível apenas por 1 e por ele mesmo.
// Exiba a mensagem "O número é primo." ou "O número não é primo." no console, dependendo do número fornecido.


document.getElementById('btnEnviar').addEventListener('click', () => {
    let numero = document.getElementById('texto').value;
    isPrimo(numero);
});

const isPrimo = (numero) => {
    let resp = false;

    
        if (numero <= 1) {
            resp = false;
        }
    
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                resp = false;
            } else { resp = true };
        }
    
    
    if (resp == true) {
        alert(`O numero ${numero} é um numero primo`);
    } else if ( resp == false) {
        alert(`O numero ${numero} não é primo.`);
    }
    
};