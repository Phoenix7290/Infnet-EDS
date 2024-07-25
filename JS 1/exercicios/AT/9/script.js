const resultadoA = Math.floor(Math.random() * 5) + 1;
const resultadoB = Math.floor(Math.random() * 5) + 1;
console.log("Resultado A: " + resultadoA);
console.log("Resultado B: " + resultadoB);

const aposta = Number(prompt("Qual é a sua aposta? [1-5]"));
console.log("Aposta: " + aposta);
            
if (aposta >= 1 && aposta <= 5) {
  if (aposta !== resultadoA && aposta !== resultadoB) {
    alert("Parabéns! Você ganhou!");
  } else {
    alert("Que pena! Você perdeu");
  }
} else {
  alert("O número digitado é inválido!");
}