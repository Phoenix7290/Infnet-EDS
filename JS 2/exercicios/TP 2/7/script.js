function somar (a, b) {
    return a + b;
  };
  
  let resultadoSoma = somar(80, 90);
  
  let changeParagraph = document.getElementById("resultado");
  changeParagraph.textContent = "O Resultado da Soma é " + resultadoSoma;