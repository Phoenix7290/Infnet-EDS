function calcula(numA, operacao, numB) {
    const operacoes = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    }
    
    const operacaoFuncao = operacoes[operacao];
    if (!operacaoFuncao) {
      return NaN;
    }
  
    return operacaoFuncao(numA, numB);
  }
  
  const teste1 = calcula(10, '+', 2); // 12
  const teste2 = calcula(10, '-', 2); // 8
  const teste3 = calcula(10, '*', 2); // 20
  const teste4 = calcula(10, '/', 2); // 5
  const teste5 = calcula(10, 'doritos', 2) // NaN
  
  console.log(teste1);
  console.log(teste2);
  console.log(teste3);
  console.log(teste4);
  console.log(teste5);