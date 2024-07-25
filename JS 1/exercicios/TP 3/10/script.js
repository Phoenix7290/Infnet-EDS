let desconto = 0;
let precoFita = Number(prompt ("Qual o valor do preço da fita em Reais?"));
let diaSemana = prompt("Qual o dia da semana que pretende ver a fita? (1 ao 7)").toLowerCase();
let categoriaFilme = prompt("Qual a categoria do filme? (comum ou lançamento)").toLowerCase();
let categoriaFilmeFinal = categoriaFilme.replace(/ç/g, "c")

switch (diaSemana) {
  case "2":
  case "3":
  case "5":
    desconto = 0.4;
    break;
  case "1":
  case "4":
  case "6":
  case "7":
    desconto = 0;
    break;
  default:
    alert("Dia da semana inválido.");
}

let acrescimo
if (categoriaFilmeFinal === "lancamento") {
  acrescimo = 0.15;
} else if (categoriaFilmeFinal === "comum") {
  acrescimo = 0;
} else {
  alert("Categoria inválida.");
} 

let resultado = precoFita * (1 + acrescimo - desconto);
resultado = resultado.toFixed(2);
alert("Você deverá pagar: " + resultado + " R$");