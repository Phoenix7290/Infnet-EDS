const passoApasso = Number(prompt("Há 10 passos. Deseja ver do inicio da lista? (1) ou outro? (entre 2 até 10"));

switch (passoApasso) {
  case 1:
    alert("Compre os grãos de café.");
  case 2:
    alert("Avalie os grãos de café.");
  case 3:
    alert("Torre os grãos.");
  case 4:
    alert("Moa os grãos torrados");
  case 5:
    alert("Ferva a água numa panela.");
  case 6:
    alert("Ponha duas colheres de café no coador");
  case 7:
    alert("Ponha a água fervida no coador (com o café)");
  case 8:
    alert("Utilize uma colher para espremer o coador");
  case 9:
    alert("Esprema numa xícara/caneca");
  case 10:
    alert("Sirva o café!");
    break;
  default:
    alert('Passo a passo inválido');
}