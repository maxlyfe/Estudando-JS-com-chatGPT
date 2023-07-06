/*
Tarefa: Calcular a média de notas

Crie um programa que calcule a média das notas de um aluno em diferentes disciplinas.
Solicite ao usuário que digite as notas de cada disciplina (por exemplo, Matemática, Ciências, História, etc.).
Armazene as notas em um array.
Em seguida, calcule a média das notas somando todas e dividindo pelo número total de disciplinas.
Exiba a média no console, arredondando para duas casas decimais.
*/


let materias = ["Matematica", "Ciencias", "Geografia", "Historia", "Portugues", "Programação" ];

let notas = [];

for (let i = 0; i < materias.length; i++) {
    let nota = parseFloat(prompt(`Digite a nota para ${materias[i]}:`));
    notas.push(nota);
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log(`A media das notas é: ${media.toFixed(2)}`);
