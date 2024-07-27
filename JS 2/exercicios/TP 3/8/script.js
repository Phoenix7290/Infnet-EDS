let userDate = prompt("Qual sua idade?");
userDate = parseInt(userDate);

if (userDate !== NaN) {
  const updatedDate = userDate + 20;
  console.log(`A idade atualizada é: ${updatedDate}`)
} else {
  console.log("A idade informada não é um número válido")
}
