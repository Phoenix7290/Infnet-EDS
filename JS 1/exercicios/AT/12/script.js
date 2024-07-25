const jogadorA = prompt("Qual sua jogada? (pedra, papel, tesoura, lagarto ou spock)").toLowerCase();
const jogadorB = prompt("Qual sua jogada? (pedra, papel, tesoura, lagarto ou spock)").toLowerCase();

if (jogadorA === "tesoura" && jogadorB === "papel") {
  alert("O jogador A venceu! Tesoura corta papel");
} else if (jogadorA === "papel" && jogadorB === "pedra") {
  alert("Jogador A venceu! Papel cobre pedra.");
} else if (jogadorA === "pedra" && jogadorB === "lagarto") {
  alert("Jogador A venceu! Pedra quebra lagarto.");
} else if (jogadorA === "lagarto" && jogadorB === "spock") {
  alert("Jogador A venceu! Lagarto envenena spock");
} else if (jogadorA === "spock" && jogadorB === "tesoura") {
  alert("Jogador A venceu! Spock esmaga tesoura");
} else if (jogadorA === "tesoura" && jogadorB === "lagarto") {
  alert("Jogador A venceu! Tesoura decapita lagarto");
} else if (jogadorA === "lagarto" && jogadorB === "papel") {
  alert("Jogador A venceu! Lagarto come papel");
} else if (jogadorA === "papel" && jogadorB === "spock") {
  alert("Jogador A venceu! Papel desmente spock.");
} else if (jogadorA === "spock" && jogadorB === "pedra") {
  alert("Jogador A venceu! Spock destrói pedra.");
} else if (jogadorA === "pedra" && jogadorB === "tesoura") {
  alert("Jogador A venceu! Pedra quebra tesoura.");
} else if (jogadorA === jogadorB) {
  alert("Empate!");
}

if (jogadorA === "papel" && jogadorB === "tesoura") {
  alert("O jogador B venceu! Tesoura corta papel");
} else if (jogadorA === "pedra" && jogadorB === "papel") {
  alert("Jogador B venceu! Papel cobre pedra.");
} else if (jogadorA === "lagarto" && jogadorB === "pedra") {
  alert("Jogador B venceu! Pedra quebra lagarto.");
} else if (jogadorA === "spock" && jogadorB === "lagarto") {
  alert("Jogador B venceu! Lagarto envenena spock");
} else if (jogadorA === "tesoura" && jogadorB === "spock") {
  alert("Jogador B venceu! Spock esmaga tesoura");
} else if (jogadorA === "lagarto" && jogadorB === "tesoura") {
  alert("Jogador B venceu! Tesoura decapita lagarto");
} else if (jogadorA === "papel" && jogadorB === "lagarto") {
  alert("Jogador B venceu! Lagarto come papel");
} else if (jogadorA === "spock" && jogadorB === "papel") {
  alert("Jogador B venceu! Papel desmente spock.");
} else if (jogadorA === "pedra" && jogadorB === "spock") {
  alert("Jogador B venceu! Spock destrói pedra.");
} else if (jogadorA === "tesoura" && jogadorB === "pedra") {
  alert("Jogador B venceu! Pedra quebra tesoura.");
}