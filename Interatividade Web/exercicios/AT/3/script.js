function Funcionario (nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.apresentar = function() {
      return `Olá, sou ${this.nome}, meu cargo é ${this.cargo} e o meu salário é ${this.salario.toFixed(2)} R$.`
    }
  };
  
  // Decidi colocar os nomes dos professores kk. Por favor, ligue com o salário imaginário nem com sua profissão engraçada kk.
  const funcionario1 = new Funcionario ("Cidcley", "O Mestre da Caixa", 100000);
  const funcionario2 = new Funcionario ("Eduardo Velho", "Doutor", 100000);
  const funcionario3 = new Funcionario ("Lauro", "Coordenador", 120000);
  
  function interfaceFuncionario(funcionario) {
    const createDiv = document.createElement("p");
    createDiv.textContent = funcionario.apresentar();
    document.body.appendChild(createDiv);
  }
  
  interfaceFuncionario(funcionario1);
  interfaceFuncionario(funcionario2);
  interfaceFuncionario(funcionario3);
  