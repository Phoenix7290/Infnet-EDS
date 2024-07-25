const comprador = prompt("Qual o seu perfil? (A para Gestantes, B para Aposentados e C para pensionistas)?");
let valorTotal = Number(prompt("Qual o valor total da compra: "));
const desconto = valorTotal >= 80 ? 0.20 : 0.15;

if (valorTotal >= 80) {
  switch (comprador) {
    case "A":
      valorTotal = valorTotal * 0.8;
      alert(" o valor total da compra é: R$" + valorTotal);
      break;
    case "B":
      valorTotal = valorTotal * 0.85;
      alert(" o valor total da compra é: R$" + valorTotal);
      break;
    case "C":
      valorTotal = valorTotal * 0.9;
      alert(" o valor total da compra é: R$" + valorTotal);
      break;
    default:
      alert("O tipo de consumidor é inválido.")
  } 
} else if (valorTotal > 0 && valorTotal < 80) {
  switch (comprador) { 
    case "A":
        valorTotal = valorTotal * 0.85;
        alert(" o valor total da compra é: R$" + valorTotal);
        break;
      case "B":
        valorTotal = valorTotal * 0.9;
        alert(" o valor total da compra é: R$" + valorTotal);
        break;
      case "C":
        valorTotal = valorTotal * 0.95;
        alert(" o valor total da compra é: R$" + valorTotal);
        break;
      default:
        alert("O tipo de consumidor é inválido.")
  }
} else {
  alert("Número inválido.")
}


// const valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
// const codigoCliente = prompt("Digite o código do cliente (gestante, aposentado, pensionista):");

// const descontoPadrao = valorCompra >= 80 ? 0.20 : 0.15;

// let desconto;
// switch (codigoCliente) {
//   case 'gestante':
//     desconto = descontoPadrao;
//     break;
//   case 'aposentado':
//     desconto = valorCompra >= 80 ? 0.15 : 0.10;
//     break;
//   case 'pensionista':
//     desconto = valorCompra >= 80 ? 0.10 : 0.05;
//     break;
//   default:
//     alert("Código do cliente inválido. Por favor, digite A, B ou C.");
//     break;
// }

// if (desconto !== undefined) {
//   const valorFinal = valorCompra * (1 - desconto);
//   alert("Valor final da compra: R$" + valorFinal);
// }

