const notas = [
    10,
    9,
    7,
    8,
    7,
    10
  ];
  
  console.log(notas);
  
  console.log(...notas);
  
  document.write("O tamanho do array é: ", notas.length, ".");
  console.log(notas.length);
  
  let fatiaDeNotas = notas.slice();
  
  document.write(" O terceiro e quarto elemento são: ", fatiaDeNotas[2], " e ", fatiaDeNotas[3]);
  console.log(fatiaDeNotas[2], fatiaDeNotas[3]);
  
  let notasInvertidas = notas.slice().reverse();
  console.log("As notas inversas são:", notasInvertidas);
  
  let ordemCrescenteNotas = notas.slice().sort((a, b) => a - b);
  console.log("As notas na ordem crescente são: ", ordemCrescenteNotas);