const numeros = [4, 2, 4, 6, 8, 3, 7, 1, 8, 6];
const numerosRemovidos = [];

function isImpar (num) {
  return num % 2 !== 0;
}

for (let i = 0; i < numeros.length; i++) {
  if (isImpar(numeros[i])) {
    numerosRemovidos.push(numeros.splice(i, 1)[0]);
    i--;
    // If para apenas os 3 primeiros números ímpares.
    if (numerosRemovidos.length === 3) {
      break;
    }
  }
}

console.log(numeros);
console.log(numerosRemovidos);