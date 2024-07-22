alert("Vamos calcular o seu IMC.");

const peso = Number (prompt("Digite seu peso: "));
const altura = Number (prompt("Digite sua altura: "));

let imc = peso / (altura * altura);
imc = imc.toFixed(1);

alert(imc);

if (imc < 18.5) {
  alert("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
  alert("Seu peso está normal.");
} else if (imc >= 25 && imc <= 29.9) {
  alert("Você está com sobrepeso.");
} else if (imc >= 30 && imc <= 34.9) {
  alert("Você está com obesidade grau 1.");
} else if (imc >= 35 && imc <= 39.9) {
  alert("Você está com obesidade grau 2.");
} else {
   alert("Você está com obesidade grau 3 ou Mórbido.");
}
 
console.log(imc);