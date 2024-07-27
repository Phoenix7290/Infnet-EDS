let selecionarH1 = document.querySelector("div h1");
console.log(selecionarH1);

let quadrado = (primeiroNumero, segundoNumero) => {
  return (primeiroNumero * primeiroNumero) + " e "  + (segundoNumero * segundoNumero);
};

const primeiroNumero = Number(prompt("Digite o primeiro número para fazer o cálculo."));
const segundoNumero = Number(prompt("Digite o segundo número para fazer o cálculo."));

const resultadoQuadrado = quadrado(primeiroNumero, segundoNumero);

selecionarH1.textContent = "O resultado é: " + resultadoQuadrado;