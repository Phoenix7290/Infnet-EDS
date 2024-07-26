function fatorialDe(n) {
  
    let fatorial = 1;
    for (let i =1; i <= n; i++) {
      fatorial *= i;
    }
    
    return fatorial;
  }
  
  const teste1 = fatorialDe(5); // 120
  const teste2 = fatorialDe(3); // 6
  const teste3 = fatorialDe(7); // 5040
  
  console.log(teste1);
  console.log(teste2);
  console.log(teste3);