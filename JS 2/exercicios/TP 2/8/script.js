let userP1 = Number(prompt("Qual sua nota P1?"));
let userP2 = Number(prompt("Qual sua nota P2?"));
let selectParagraph = document.getElementById("resultado");

resultado();

function resultado () {
  let mediumP1P2 = (userP1 + userP2) / 2;
    
  if (mediumP1P2 >= 5) {
    selectParagraph.textContent = "Aprovado";
  } else if (mediumP1P2 < 5) {
    selectParagraph.textContent = "Reprovado";
  }
};