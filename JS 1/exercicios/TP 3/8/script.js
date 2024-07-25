let numero1 = Number(prompt ("Diga o primeiro número para a operação."));
let numero2 = Number(prompt("Digite o segundo número para a operação."));
let operacao = prompt("Escolha a operação: adição (+), subtração (-), multiplicação (*), divisão (/).");

switch (operacao) {
  case "+":
    adicao = numero1 + numero2;
    alert("O resultado da adição é: " + adicao);
    break;
  case "-":
    subtracao = numero1 - numero2;
    alert("O resultado da subtração é: " + subtracao);
    break;
  case "*":
    multriplicacao = numero1 * numero2;
    alert("O resultado da multiplicação é: " + multriplicacao);
    break;
  case "/":
    if (numero2 === 0) {
      alert("Divisão por zero não é permitida.");
      } else {
      divisao = numero1 / numero2;
      alert("O resultado da divisao é: " + divisao);
      }
    break;
  default:
    alert("Operação Inválida.");
}