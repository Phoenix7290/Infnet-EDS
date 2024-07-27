let userPrompt = parseInt(prompt("Escreva um número para calcular o seu fatorial."));

function calculateFactorial(n) {
  if (n < 0) {
    console.log("Fatorial não definido para números negativos.")
  }
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

const resultado = calculateFactorial(userPrompt);

console.log(`O resultado do fatorial desse número é ${resultado}`);
