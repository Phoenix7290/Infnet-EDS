const userPrompt = parseInt(prompt("Digite um número."));

if (userPrompt < 0 || userPrompt > 5) {
  alert("Digite apenas números entre 0 e 5.");
} else {
  let sum = 0;
  let counter = 0;

  while (counter < userPrompt) {
    sum += Math.random();
    counter++;
    console.log(sum);
  }

  console.log(sum.toFixed(2));
}