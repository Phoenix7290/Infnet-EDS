// Não modifique as constantes seguintes
const a = 1;
const b = "2";
const c = 3;
const d = "4";

/* Modifique SOMENTE o que está entre parênteses dentro de console.log e antes de "==" nas chamadas no final deste script. Realize somente conversões de tipo ou substitua as variáveis por outras das que foram declaradas logo acima. Observe os dois exemplos a seguir.
*/

/*Exemplo 1:
ANTES DE CORRIGIR:
console.log(c + c == 4);

DEPOIS DE CORRIGIR:
console.log(a + c == 4); // não modificou o == 4, somente as variáveis anteriores à igualdade
*/

/*Exemplo 2:
ANTES DE CORRIGIR:
console.log(typeof d == "number");

DEPOIS DE CORRIGIR:
console.log(typeof a == "number"); // não modificou o == "number", somente a variável anterior à igualdade
*/

//MODIFIQUE AS LINHAS ABAIXO

console.log(typeof a == "number");
console.log(c * Number(d) == 12);
console.log(b + d == "24");
console.log(typeof b == "string");