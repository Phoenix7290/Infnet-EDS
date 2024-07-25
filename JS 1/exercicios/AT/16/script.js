function getDataFormatada (dia, mes, ano) {
  const date = new Date(ano, mes - 1, dia);
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
}

const dataFormatada = getDataFormatada(5, 10, 2022);
// Mostra '05/10/2022' (DD/MM/AAAA) se o navegador estiver em português
// Ou, mostra '10/5/2022' (MM/DD/AAAA) se o navegador estiver em inglês
console.log(dataFormatada);

const dataFormatada2 = getDataFormatada(25, 8, 1983);
console.log(dataFormatada2);

const dataFormatada3 = getDataFormatada (12, 6, 2006);
console.log(dataFormatada3);