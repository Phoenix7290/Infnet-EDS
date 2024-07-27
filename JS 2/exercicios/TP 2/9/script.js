const userCelsius = Number(prompt("Diga uma temperatura que deseja transformar de Celsis para Farenheit (use apenas números)."));

farenheit(userCelsius);

function farenheit (C) {
  let F = 1.8 * C + 32;
  alert(F + " em Farenheit");
};