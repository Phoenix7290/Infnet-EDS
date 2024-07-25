let escolhaUsuario = prompt("Escolha Par ou Ímpar").toLowerCase();
let numeroSorteado;

if (escolhaUsuario !== "par" && escolhaUsuario !== "ímpar") {
  alert("Escolha inválida.");
} else {
  numeroSorteado = Math.floor(Math.random() * 100) + 1;
  alert("O número sorteado é " + numeroSorteado);
  console.log("O número sorteado é " + numeroSorteado);
}

if ((numeroSorteado % 2 === 0 && escolhaUsuario === "par") || (numeroSorteado % 2 !== 0 && escolhaUsuario === "ímpar")) {
  alert("Ganhou!");
} else {
  alert("Perdeu");
}