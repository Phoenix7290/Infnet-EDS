const votosRobo = parseInt(prompt("Digite a quantidade de votos para o RoboRat."));
const votosSuperKeyboard = parseInt(prompt("Digite a quatidade de votos para Super Keyboard"));
const invalidosVotos = parseInt(prompt("Digite a quantidade de votos inválidos."));
let totalVotos = votosRobo + votosSuperKeyboard + invalidosVotos;

const porcentagemRobo = (votosRobo / totalVotos) * 100;
const porcentagemSuper = (votosSuperKeyboard / totalVotos) * 100;
const porcentageminvalidos = (invalidosVotos / totalVotos) * 100;
alert("As porcentagens dos votos considerando os inválidos são: \n" +
     "RoboRat: " + porcentagemRobo + "%\n" +
     "SuperKeyboard: " + porcentagemSuper + "%\n" +
     "Votos inválidos: " + porcentageminvalidos + "%");

let totalVotosValidos = votosRobo + votosSuperKeyboard;
const porcentagemRoboValidos = (votosRobo / totalVotosValidos) * 100;
const porcentagemSuperValidos = (votosSuperKeyboard/ totalVotosValidos) * 100;
alert("As porcentagens dos votos desconsiderando os inválidos são: \n" +
        "RoboRat: " + porcentagemRoboValidos + "%\n" +
        "SuperKeyboard: " + porcentagemSuperValidos + "%")

if (porcentagemRoboValidos > porcentagemSuperValidos){
  alert("O novo mascote do time é o RoboRat!");
} else if (porcentagemSuperValidos > porcentagemRoboValidos) {
  alert("O novo mascote do time é o SuperKeyboard!");
} else {
  alert("Empate! não foi possivel determinar o mascote do time.");
}


  