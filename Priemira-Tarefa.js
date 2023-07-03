/*
Declare uma variável chamada idade e atribua a ela um valor numérico que represente a idade de uma pessoa.

Crie uma estrutura condicional if para verificar a idade e exibir uma mensagem de acordo com a faixa etária. Por exemplo:

Se a idade for menor que 18, exiba a mensagem: "Você é menor de idade."
Se a idade estiver entre 18 e 64, exiba a mensagem: "Você é adulto."
Caso contrário, exiba a mensagem: "Você é idoso."
Execute o programa e verifique se as mensagens são exibidas corretamente de acordo com a idade fornecida.

*/

let idade = 30;

if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >=18 && idade < 64) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
};
