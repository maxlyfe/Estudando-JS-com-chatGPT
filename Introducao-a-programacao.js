/* Conceitos Basicos de programação, como variaveis, tipos de dados, estruturas 
    de controle (condicionais, loops) e funções*/



/*
                                            Variáveis:
*/
/*
    Uma variável é um espaço de armazenamento na mem´ria do computador que é usado para guardar um valor. 
    Elas têm um nome único e são utilizadas para representar informações que podem ser modificadas durante 
    a execuçao de um programa.

    Em JavaScript, você pode declarar uma variável usando a palavra-chave 'var', 'let' ou 'const', seguida pelo 
    nome da variável.

    Por exemplo:
*/

var idade;
let nome;
const PI = 3.14;

/*
    O 'var' é a forma mais antiga de declara varáveis em JavaScript, o 'let' é a forma moderna que permite a reatribuição 
    de valores, e o 'const' é usado para declarar constantes cujo valor não pode ser alterado após a atribuição inicial.

    Você pode atribuir um valor a uma variável utilizando o operador de atribuição '='

    Por exemplo:
*/

idade = 25;
nome = 'João';

/*
    Também é possivel declarar e inicializar uma variável ao mesmo tempo
*/

var preco = 9.99;
let quantidade = 10;
const total = preco * quantidade;

/*
                                                Tipo de dados:
*/

/*
    Em JavaScript, existem vários tipos de dados, incluindo:

    * Números: representam valores numéricos. Por exemplo '10', '20', '30' e '-5'.

    * Strings: representam sequências de caracteres. São declaradas entre aspas simples ou duplas. Por exemplo: 'Olá' , "Mundo!".

    * Booleanos: representam valores verdadeiros ('True') ou falso ('False').

    * Arrays: são estruturas de dados que armazenam uma coleção de elementos, onde cada elemento pode ser acessado através
    de um índice. Por exemplo: '[1, 2, 3]' , `["maça", "banana", "laranja"]`.

    * Objetos: são coleções de pares de chave-valor, onde cada valor pode ser de qualquer tipo de dado.
    Por exemplo:
*/

var pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
};

/*  
    Nesse exemplo, 'nome','idade' e 'cidade' são chaves, e 'João', '25' e 'São Paulo' são os valores correspondentes.

    * Null e Undefined: 'null' é um valor especial que representa a ausência intencional de um objeto ou valor. 'undefined' é um valor 
    atribuido autimaticamente as variaveis que foram declaradas, mas ainda não receberam nenhum valor.
*/

/*
                                            Estruturas de controle:
*/

/*
    As estruturas de controle são usadas para controlar o fluxo de execução de um programa. 
    Duas estruturas de controle comuns são as condicionais e os loops.
*/

/*
                Condicionais:
*/

/*
    As estruturas condicionais permitem que o programa tome desisões com base em condições.
    O JavaScript possui três tipos principais de estruturas condicionais: 'if', 'else if' e 'else'.

    O 'if' verifica uma condição e executa um bloco de codigo se a condição for verdadeira.
    Por exemplo:
*/

var idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
};

/*
    Se a condição for falsa, o bloco de codigo dentro do 'if' não será executado. É possivel adicionar um bloco de 
    codigo alternativo usando o 'else'.
    
    Por exemplo:
*/

var idade = 16;

if (idade >=18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
};


/*
    O 'else if' é usado quando há varias condições a serem verificadas.

    Por exemplo:
*/

var nota = 75;

if (nota >= 90) {
    console.log("A");
} else if (nota >=80) {
    console.log("B");
} else if (nota >=70) {
    console.log("C");
} else {
    console.log("D");
};


/*
                    Loops:
*/

/*
    Os loopes são usados para executar um bloco de codigo repetidamente até que uma codição seja atendida.
    Os loops mais comuns em JavaScript são 'for' e 'while'.

    O 'for' é usado quando você sabe antecipadamente quantas vezes o loop precisa ser executado.
    Por exemplo:
*/

for (var i = 0; i < 5; i++) {
    console.log(i)
};

/*
    Nesse exemplo, o loop será executado cinco vezes, imprimindo os numeros de 0 a 4.

    O 'while' é usado quando você não sabe quantas vezes o loop precisa ser executado, mas existe uma condição
    para continuar executando o loop.

    Por exemplo:
*/

var i = 0;

while (i < 5) {
    console.log(i);
    i++;
};


/*
    Nesse exemplo, o loop será executado até que o 'i' seja igual a 5, imprimindo os numeros de 0 a 4.
*/

/*
                                                    Funções:
*/


/*
    As funções são blocos de codigo reutilizaveis que podem receber argumentos, realizar um 
    processamento e retornar um valor. Elas ajudam a organizar o codigo e tornam-no mais modular.

    Você pode definir uma função usando a palavra-chave 'function', seguida pelo nome da função, uma lista de 
    parâmetros entre parenteses e um bloco de codigo entre chaves.

    Por exemplo:
*/

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("João");


/*
    Nesse exemplo, a função 'saudacao' recebe um parâmetro 'nome' e imprime uma saudaçao com o valor do paramentro.

    As funções também podem retornar valores usando a palavra-chave 'return'. 

    Por exemplo:
*/

function soma(a, b) {
    return a+b;
};

var resultado = soma(3, 4);

console.log(resultado);

/*
    Nesse exemplo, a função 'soma' recebe dois parametros 'a' e 'b' e retorna a soma dos dois valores.

    Essa são as bases da programação em JavaScript, incluindo variaveism tipos de dados, estruturas de controle 
    (condicionais e loops) e funções. Com esses conceitos, você já pode coimeçar a desenvolver programas simples em JavaScript.
    
*/