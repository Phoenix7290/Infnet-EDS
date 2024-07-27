const informeIncremento = Number(prompt("Informe o valor do incremento. (1 a 10)"));

if (informeIncremento < 1 || informeIncremento > 10) {
  alert("Valor inválido. Escolha entre 1 até 10");
} else {
  let contador = 0;

  for(i=0; i <= 50; i += informeIncremento) {
    console.log(`Contador ${contador}`);
    contador += informeIncremento;
  };
};