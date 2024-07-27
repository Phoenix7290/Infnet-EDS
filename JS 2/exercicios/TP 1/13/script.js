const fibonacci = [];

let contadorA = 0;
let contadorB = 1;

fibonacci.push(contadorA, contadorB);

while (contadorA + contadorB <= 55) {
  fibonacci.push(contadorB);
  contadorB = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
};

console.log(fibonacci);
