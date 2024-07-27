let contador = 0;

while (true) {
  let randomIteration = Math.random();
  
  if (randomIteration < 0.75) {
    contador++;
  } else {
    console.log("A iteração não ocorrreu neste turno.")
  }
  
  let randomError = Math.random();

  if (randomError < 0.1) {
    console.log("A iteração foi interrompida.");
    break;
  };
};

console.log(contador);