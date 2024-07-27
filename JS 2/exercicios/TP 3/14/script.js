let selectP = document.getElementById("resultado");

const userNumber = parseInt(prompt("Informe um número para calcularmos o fatorial dele."));

const calculateFactorial = function (n) {
  if (n < 0) {
    console.log("Fatorial não definido para números negativos.")
  }
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

const resultado = calculateFactorial(userNumber);

selectP.textContent = `O fatorial do número ${userNumber} é ${resultado}`;