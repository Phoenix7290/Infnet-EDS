const tempoPresente = new Date();
const tempoPassado = new Date("2000-01-01");

const tempoCalculado = tempoPassado !== tempoPresente;
console.log("Tempo: ", tempoCalculado);
