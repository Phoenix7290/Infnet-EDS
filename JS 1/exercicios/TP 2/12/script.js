let valorCompra = Number(prompt("Digite o valor total da compra"));
let formaPagamento = prompt("Digite a forma de pagamento [à vista / a prazo]:").toLowerCase();
let valorTotal = 0;

if(formaPagamento === "à vista") {
  const aVista = prompt ("Digite a forma de pagamento (dinheiro, débito ou crédito)").toLowerCase();
  let desconto = 0;
  if (aVista === "dinheiro") {
    desconto = valorCompra * 0.1;
  } else if (aVista === "débito") {
    desconto = valorCompra * 0.08;
  } else if (aVista === "crédito") {
    desconto = valorCompra * 0.05;
  } else {
    alert("Forma de pagamento inválida.");
  }
  valorTotal =valorCompra - desconto;
  alert("Valor total da compra com desconto: R$ "+ valorTotal);
} else if (formaPagamento === "a prazo") {
  
  let parcelas = Number(prompt ("Digite o número de parcelas"));
  if (parcelas <= 0) {
    alert("Forma de pagamento inválida.");
  } else if (parcelas > 0 && parcelas <= 3) { 
    alert ("Valor da compra sem desconto: R$" + valorCompra);
  } else {
    valorTotal = valorCompra + (valorCompra * 0.04);
     alert("Valor total da compra com os juros: R$ "+ valorTotal);
  }
} 