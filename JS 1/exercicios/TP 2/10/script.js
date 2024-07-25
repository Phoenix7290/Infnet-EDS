let lado1 = Number (prompt ("Diga o primeiro número"));
let lado2 = Number (prompt ("Diga o segundo número"));
let lado3 = Number (prompt ("Diga o terceiro número"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  alert("Os 3 valores informados podem formar um triângulo.")
} else {
  alert("Os 3 valores informados não podem formar um triângulo.")
}
