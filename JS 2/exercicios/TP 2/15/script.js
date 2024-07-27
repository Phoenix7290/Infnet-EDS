const informeIncremento = Number(prompt("Informe o valor do incremento. (1 a 10)"));

if (informeIncremento < 1 || informeIncremento > 10) {
  alert("Valor inválido. Escolha entre 1 até 10");
} else {
  let contador = 0;

  while(true) {
    console.log(`Contador ${contador}`);
    contador += informeIncremento;
    
    const continuarInformando = prompt("Deseja continuar incrementando o contador? (Diga Não para pausar)");

    if (continuarInformando.toLowerCase() === "não") {
      alert(`O valor final do Contador é: ${contador}`);
      console.log(`Contador ${contador}`);
      break;
    };
  };
};

