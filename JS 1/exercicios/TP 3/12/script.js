alert("Vamos calcular o seu IMC.");

const peso = Number (prompt("Digite seu peso: "));
const altura = Number (prompt("Digite sua altura: "));

let imc = peso / (altura * altura);
imc = imc.toFixed(2);

alert(imc);

if (imc < 16 && imc >=0) {
  alert("Você está abaixo do peso. (grau 1)");
} else if (imc >= 16 && imc <= 16.99) {
  alert("Você está abaixo do peso. (grau 2)");
} else if (imc >= 17 && imc <= 18.49) {
  alert("Você está abaixo do peso. (grau 3)");
} else if (imc >= 18.5 && imc <= 24.99) {
  alert("Você está com peso adequado.");
} else if (imc >= 25 && imc <= 29.99) {
  alert("Você está sobrepeso.");
} else if (imc >=30 && imc <= 34.99) {
  alert("Você está com obesidade grau 1.");
} else if (imc >=35 && imc <= 39.99) { 
  alert("Você está com obesidade grau 2.");
} else if (imc >= 40) {
  alert("Você está com obesidade grau 3");
} else {
  alert("Inválido.")
}

console.log(imc);