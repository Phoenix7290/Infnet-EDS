// "Aqui jaz um código". Existia um código pré-feito que foi reutilizado por motivos acadêmicos.

let contador = 0;

while (true) {
  contador++;
  let randomError = Math.random();

  if (randomError < 0.1) {
    console.log("A iteração foi interrompida.");
    break;
  };
};

console.log(contador);