const corDigitada = prompt("Digite uma dessas cores: \n red, \n green, \n blue, \n black, \n white.");

switch (corDigitada) {
  case "red":
    console.log("#ff0000");
    break;
  case "green":
    console.log("#00ff00");
    break;
  case "blue":
    console.log("#0000ff");
    break;
  case "black":
    console.log("#000000")
    break;
  case "white":
    console.log("#ffffff");
    break;
  default:
    console.log("A cor digitada é inválida");
}