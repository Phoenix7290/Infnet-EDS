let lado1 = Number(prompt("Digite o tamanho do primeiro lado do triângulo"));
let lado2 = Number(prompt("Digite o tamanho do segundo lado do triângulo"));
let lado3 = Number(prompt("Digite o tamanho do terceiro lado do triângulo"));


if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if(lado1 === lado2 && lado2 === lado3) {
    alert("O triângulo é equilátero.");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("O triângulo é isósceles.");
  } else { 
    alert("O triângulo é escaleno.");
  }

} else {
  alert("Os valores não formam um triângulo.");
}