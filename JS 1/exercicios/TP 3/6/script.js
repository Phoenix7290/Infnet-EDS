let genero = prompt("Qual seu gênero (homem ou mulher)?") 
//ternário ? "homem" : "mulher";
let altura = Number(prompt("Digite sua altura."));

if (genero === "homem" && altura > 0) {
  idealHomem = 72.7 * altura - 58;
  idealHomem = idealHomem.toFixed(2);
  alert("O seu peso ideal é: " + idealHomem)
} else if (genero === "mulher" && altura > 0) {
  idealMulher = 62.1 * altura - 44.7;
  idealMulher = idealMulher.toFixed(2);
  alert("O seu peso ideal é: " + idealMulher)
} else {
  alert("A altura é inválida.");
}