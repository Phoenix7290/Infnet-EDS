const limitePesca = 50;
const multa = 4;

let pesca = Number(prompt("Quantos kilogramas de peixe pescados?"));

let precoTotal;

if (pesca > 50) {
  let excedente = pesca - limitePesca;
  precoTotal = excedente * multa;
  alert("A multa, devido ao excedente de peso é: " + precoTotal + " R$");
} else if (pesca <= limitePesca && pesca >= 1) {
  alert("Não há excedente de peso.")
} else {
  alert("Número inválido.")
}