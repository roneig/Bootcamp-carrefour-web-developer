/* 3 / 3 - Idade em Dias
Você terá o desafio de ler um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. 
Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 
Entrada
O arquivo de entrada contém um valor inteiro.
Saída
Imprima a saída conforme exemplo fornecido.
 
Exemplo de Entrada	Exemplo de Saída
400	                1 ano(s)
                    1 mes(es)
                    5 dia(s)
800	                2 ano(s)
                    2 mes(es)
                    10 dia(s)
30	                0 ano(s)
                    1 mes(es)
                    0 dia(s)

*/
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

//let totalDeDias = parseInt(gets());
const readline = require('readline-sync');
let totalDeDias = readline.question();

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);      // o inteiro de divisão = qtd. anos            
totalDeDias = totalDeDias %  365;           // o resto da divisão   = número de dias restantes

qtdMeses = parseInt(totalDeDias / 30);      // o inteiro da divisão = qtd. meses
totalDeDias =  parseInt(totalDeDias % 30);  // o resto da divisão   = número de dias restantes

//let resultado = (qtdAnos + " ano(s) " + '\n' + 
//qtdMeses +" mes(es)" + '\n' +
//totalDeDias + " dia(s)");

//print(resultado);
console.log(qtdAnos + " ano(s)");
console.log(qtdMeses + " mes(es)");
console.log(totalDeDias + " dia(s)");

