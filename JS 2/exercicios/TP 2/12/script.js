const userNumber = Number(prompt("Quantos números deseja sortear? \nO sorteio dos números será entre 1 a 60"));

let sortedNumbers = [];
for (i = 0; i < userNumber; i++) {
  let randomNumbers = Math.ceil(Math.random() * 60);
  sortedNumbers.push(randomNumbers);
};

console.log("Os números sorteados foram: ", sortedNumbers);