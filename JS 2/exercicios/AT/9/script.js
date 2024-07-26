function fibonacciAte(num) {
    const fibonacci = [0,1];
  
    for (let i = 2; ; i++) {
      const nextFib = fibonacci[i - 1] + fibonacci[i - 2];
      if (nextFib > num) {
        break;
      }
      fibonacci.push(nextFib);
    }
    
    return fibonacci;
  }
  
  const teste1 = fibonacciAte(6); // [0, 1, 1, 2, 3, 5]
  const teste2 = fibonacciAte(8); // [0, 1, 1, 2, 3, 5, 8]
  const teste3 = fibonacciAte(23); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
  
  console.log(teste1);
  console.log(teste2);
  console.log(teste3);
  