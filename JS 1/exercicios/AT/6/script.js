// Exemplo I: para corrigir essa linha, seria necessário alterar para "const gostaDeGatos = !false;"
const gostaDeGatos = !false;
alert("gostaDeGatos: " + gostaDeGatos);

// Exemplo II: Já aqui, seria possível remover o "!true", alterando-o para "true"
const appleEhCaro = true;
alert("appleEhCaro: " + appleEhCaro);

const cafeEhBom = true && !false;
alert("cafeEhBom: " + cafeEhBom);

const androidEhMelhorQueIos = !false || false;
alert("androidEhMelhorQueIos: " + androidEhMelhorQueIos);

const nirvanaEhMelhorQueGuns = true && (!false && !false);
alert("nirvanaEhMelhorQueGuns: " + nirvanaEhMelhorQueGuns);

const estouTeVendo = (true || true) && !false;
alert("estouTeVendo: " + estouTeVendo);