const X = parseInt(prompt("Digite um número inteiro e positivo (X):"));
const A = parseFloat(prompt("Digite um valor real para A:"));
const B = parseFloat(prompt("Digite um valor real para B:"));
const C = parseFloat(prompt("Digite um valor real para C:"));

alert("Valores informados:\n" +
      "X: " + X + "\n" +
      "A: " + A + "\n" +
      "B: " + B + "\n" +
      "C: " + C);

if (X === 1) {
  alert("Valores em ordem crescente: " + [A, B, C].sort((a, b) => a - b));
} else if (X === 2) {
  alert("Valores em ordem decrescente: " + [A, B, C].sort((a, b) => b - a));
} else if (X === 3) {
  const max = Math.max(A, B, C);
  const min = Math.min(A, B, C);
  const mid = A + B + C - max - min;
  alert("Maior valor entre os três: " + max);
  alert("Valores ordenados: " + min + ", " + max + ", " + mid);
} else {
  alert("X não é um dos valores esperados (1, 2 ou 3).");
}

  
 