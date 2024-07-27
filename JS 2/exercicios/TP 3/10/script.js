// Funções anônimas tem como a principal característica não possuir um nome, justo por isso são chamadas de anônimas. Muito utilizadas especialmente em Arrays, callbacks, em variáveis e outras demais funções. Veja alguns exemplos abaixo:

const numeros = [1,2,3,4,5,6,7,8,9,10];
const numerosDuplicados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numerosDuplicados);

const boasVindas = function () {
  return "Boas vindas";
};
console.log(boasVindas());