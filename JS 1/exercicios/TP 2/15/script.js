const ano = prompt ("Digite um ano que possua 4 dígitos")

if ((ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0)) {
  alert("O " + ano + " é um ano bissexto")
} else {
  alert("O " + ano + " não é um ano bissexto")
}
  