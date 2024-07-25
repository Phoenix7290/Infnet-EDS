let cargo = prompt("Qual seu nível de cargo?");
let salario = Number(prompt("Qual seu salário atual?"));

switch (cargo) {
  case "estagiário":
    alert(`Seu novo salário é: ${salario * 1.1}`);
    break;
  case "trainee":
    alert(`Seu novo salário é: ${salario * 1.09}`);
    break;
  case "júnior":
    alert(`Seu novo salário é: ${salario * 1.08}`);
    break;
  case "pleno":
    alert(`Seu novo salário é: ${salario * 1.07}`);
    break;
  case "sênior":
    alert(`Seu novo salário é: ${salario * 1.06}`);
    break;
  default:
    alert("Seu cargo não é conhecido pelo sistema. Tente novamente.");
}