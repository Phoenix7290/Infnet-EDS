const numeros = [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15];
let numerosSelecionados = [];

for (let i = 1;i < numeros.length; i++) {
  if (numeros[i - 1] % 2 === 0) {
    numerosSelecionados.push(numeros[i]);
  }
}

console.log(numerosSelecionados);