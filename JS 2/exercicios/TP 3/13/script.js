function sortNumbers (a, b, c) {
    let valores = [a,b,c];
    valores.sort((x,y) => x - y);
    return valores;
  }
  
  console.log(sortNumbers(10, 50, 100));
  console.log(sortNumbers(12, 24, 5));
  console.log(sortNumbers(76, 30, 18));