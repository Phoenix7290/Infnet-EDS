let faixaEtaria = prompt ("Qual é a sua Categoria? (A, B, C, D ou E)");

switch (faixaEtaria) {
  case "A":
    alert("Você tem entre 5 a 7 anos.");
    break;
  case "B":
    alert("Você tem entre 8 a 11 anos.");
    break;
  case "C":
    alert("Você tem entre 12 a 13 anos.");
    break;
  case "D":
    alert("Você tem entre 14 a 17 anos.");
    break;
  case "E":
    alert("Você é maior de 18 anos");
    break;
  default:
    alert(faixaEtaria + " é uma categoria etária inválida.");
}