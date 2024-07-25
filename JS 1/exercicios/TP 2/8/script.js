const salario = Number(prompt("Salário:"));

/* Os funcionários que recebem salário inferior ao piso
   devem receber o aumento. */
const novoPisoSalario = 2000;

if (salario < novoPisoSalario) {
  const novoSalario = salario * 1.1;
  console.log("R$\t", novoSalario.toFixed(2));
}
