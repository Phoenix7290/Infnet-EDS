const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();

  if (nome === '') {
    alert("O campo nome não pode estar vazio");
  }

  if (!email.includes("@")) {
    alert('O campo email deve conter um "@" .')
  }

  const cpfNumeros = cpf.replace(/\D/g, '');
  const cpfRegex = /^(\d{11}|\d{14})$/;
  if (!cpfRegex.test(cpfNumeros)) {
    alert("O campo CPF deve conter exatamente 11 ou 14 caracteres númericos.");
  };
});