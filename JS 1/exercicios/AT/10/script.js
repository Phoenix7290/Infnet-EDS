let distancia = Number(prompt("Qual é a distância a ser percorrida? (km)"));

if (distancia <= 5) {
  alert("Dá pra ir caminhando!");
} else if (distancia > 5 && distancia <= 300) {
  alert("Já pode ir de carro!")
} else {
  alert("É melhor ir de avião!")
}