/* 3 / 3 - Ordenando Números Pares e Ímpares
Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.
Ordene estes valores de acordo com o seguinte critério:
•	Primeiro os Pares
•	Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) 
Este é o número de linhas de entrada que vem logo a seguir. 
As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. 

Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.
 
Exemplo de Entrada	Exemplo de Saída
10
4                   4
32                  32                      
34                  34  
543                 98 
3456                654 
654                 3456 
567                 6789 
87                  567 
6789                543 
98	                87
*/
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

//let totalItems = parseInt(gets());
const readline = require('readline-sync');
let totalItems = parseInt(readline.question());
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
//  let number = parseInt(gets());
    let number = readline.question();

    if (number % 2 === 0) {
        pares.push(number);
    } else {
        impares.push(number);
    }
}

pares.sort( (a, b) => a-b );
impares.sort( (a, b) => b-a );

for(let i = 0; i < pares.length; i++){
    console.log(pares[i]);
//  print(pares[i]);
}
for(let i = 0; i < impares.length; i++){
    console.log(impares[i]);
//  print(impares[i]);
}


