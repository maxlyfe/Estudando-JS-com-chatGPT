/*
Tarefa: Calcular o índice de massa corporal (IMC)

Crie um programa que calcule o IMC de uma pessoa com base no peso e na altura fornecidos.

O IMC é calculado dividindo o peso (em quilogramas) pelo quadrado da altura (em metros).

Após calcular o IMC, exiba uma mensagem informando a situação da pessoa com base no valor do IMC, conforme a tabela abaixo:

IMC < 18.5: "Abaixo do peso"
18.5 <= IMC < 25: "Peso normal"
25 <= IMC < 30: "Sobrepeso"
IMC >= 30: "Obeso"
Utilize variáveis para armazenar o peso, a altura e o resultado do cálculo do IMC.

Exiba o resultado no console.
*/

let peso = 70;
let altura = 1.75;

function imc (peso , altura ) {
    var calculo = peso / (altura ** 2);
    return calculo;
}

let res = imc(peso, altura);

if (res < 18.5) {
    console.log("Abaixo do peso");
} else if (res <= 25) {
    console.log("Peso normal");
} else if (res < 30 ) {
    console.log("Sobrepeso");
} else if (res >= 30) {
    console.log("Obeso");
};