/* 3 / 3 - Análise de Números

Desafio
Você deve fazer a leitura de 5 valores inteiros.
Em seguida mostre
quantos valores informados são pares,
quantos valores informados são ímpares,
quantos valores informados são positivos e
quantos valores informados são negativos.
Considere que o número zero é positivo,
mas não pode ser considerado como positivo ou negativo.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo,
sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

Exemplo de Entrada	Exemplo de Saída
-5                  3 par(es)
0                   2 impar(es)
-3                  1 positivo(s)
-4                  3 negativo(s)
12
 */
package dio.java.desafio.AnaliseDeNumeros;

import java.io.IOException;
import java.util.Scanner;

public class AnaliseDeNumeros {
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int pares = 0;
        int impares = 0;
        int positivos = 0;
        int negativos = 0;
        int num = 0;

        for (int i = 0; i < 5; i++) {
            num = leitor.nextInt();
            if (num % 2 == 0) {
                pares++;
            } else {
                impares++;
            }
            if (num < 0) {
                negativos++;
            } else if (num > 0) {
                positivos++;
            }
        }
        System.out.println(pares + " par(es)");
        System.out.println(impares + " impar(es)");
        System.out.println(positivos + " positivo(s)");
        System.out.println(negativos + " negativo(s)");
    }
}









