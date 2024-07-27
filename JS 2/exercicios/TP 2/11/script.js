const userTime = prompt("Qual o nome do Time?");
const userVictories = Number(prompt("Qual a quantidade de Vitórias?"));
const userDraws = Number(prompt("Qual a quantidade de empates?"));
const userDefeats = Number(prompt("Qual a quantidade de Derrotas?"));

function soccer(userTime, userVictories, userDraws, userDefeats) {
  const total = userVictories + userDraws + userDefeats;
  let media = (((3 * userVictories) + (userDraws) + (0 * userDefeats)) / total).toFixed(2);
  return `O time ${userTime} teve ${total} jogos e média (aproximada) de ${media}.`
};

console.log(soccer(userTime, userVictories, userDraws, userDefeats));