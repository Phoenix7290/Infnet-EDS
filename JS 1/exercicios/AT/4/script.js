let numA = Number(prompt("Escolha um número A."));
let numB = Number(prompt("Escolha um número B."));
let numC = Number(prompt("Escolha um número C."));
let numD = Number(prompt("Escolha um número D."));
let numE = Number(prompt("Escolha um número E."));

let media = (numA + numB + numC + numD + numE ) /5;
alert("A média dos números é: " + media);
alert("O menor número entre todos: " + Math.min(numA, numB, numC, numD, numE));
alert("O maior número entre todos: " + Math.max(numA, numB, numC, numD, numE));