const newRules = `
1: Don't pick up the phone
You know he's only calling 7 'cause he's drunk and alone
2: Don't let him in 4
You'll have to kick him out again
3: Don't be his friend 8
You know you're gonna wake up 3 in his bed in the morning
And if you're under him, you ain't gettin' over him
`

const numeros = [];

for (let i = 0; i < newRules.length; i++) {
  const char = newRules[i];
  if (char >= '0' && char <= '9') {
    numeros.push(Number(char));
  }
}

console.log(numeros);

const soma = numeros.reduce((acc, num) => acc + num, 0);

console.log(soma);

const somaImpares = numeros
  .filter(num => num % 2 !== 0)
  .reduce((acc, num) => acc + num, 0);

console.log(somaImpares);

const somaPares = numeros
  .filter(num => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);

console.log(somaPares);