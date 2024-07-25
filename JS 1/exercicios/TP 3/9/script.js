let tipoConsumidor = prompt("Qual tipo de consumidor você é? (Residencial ou Comercial ou Industrial)");
let consumo = Number(prompt("Qual o seu consumo de metros cúbicos de água?"));

let preco;

switch (tipoConsumidor) {
  case "Residencial" :
    preco = 5 + (0.05 * consumo);
    alert("valor a ser pago é " + preco + " R$");
    break;
  case "Comercial" :
    if (consumo <= 80 && consumo >= 0) {
      preco = 500;
      alert("valor a ser pago é " + preco + " R$");
    } else if (consumo > 80) {
      preco = 500 + (0.25 * (consumo - 80));
      alert("valor a ser pago é " + preco + " R$");
    } else {
      alert("Valor de metros cúbicos de água invalidos.");
    }
    break;
  case "Industrial" :
    if (consumo <= 100 && consumo >= 0) {
      preco = 800;
      alert("valor a ser pago é " + preco + " R$");
    } else if (consumo > 100) {
      preco = 800 + (0.04 * (consumo - 100));
      alert("valor a ser pago é " + preco + " R$");
    } else {
      alert("Valor de metros cúbicos de água invalidos.");
    }
    break;
  default :
    alert("Tipo de consumidor inválido.")
}

// const taxaResidencial = 5;
// const taxaComercial = 500;
// const taxaIndustrial = 800;
// const consumoResidencial = 0.05;
// const consumoComercial = 0.25;
// const limiteComercial = 80;
// const consumoIndustrial = 0.04;
// const limiteIndustrial = 100;

// if (tipoConsumidor === "Residencial") {
//   let residencial = taxaResidencial + (consumo * consumoResidencial);
//   alert("A sua conta de água é: " + residencial + " R$");
// } else if (tipoConsumidor === "Comercial") {
//   let excedenteComercial = consumo - limiteComercial;
//   let comercial = taxaComercial + (excedenteComercial * consumoComercial);
//   alert("A sua conta de água é: " + comercial + " R$");
// } else if (tipoConsumidor === "Industrial") {
//   let excedenteIndustrial = consumo - limiteIndustrial;
//   let industrial = taxaIndustrial + (excedenteIndustrial * consumoIndustrial)
//   alert("A sua conta de água é: " + industrial + " R$");
// } else {
//   alert("Inválido.")
// }