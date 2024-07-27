const advogado = {
    nome: 'Pedro',
    horasTrabalhadas: 160,
    valorHora: 20,
    cacularGanho() {
      return this.horasTrabalhadas * this.valorHora;
    }
  };
  
  console.log(advogado);
  console.log(advogado.cacularGanho());
  console.log(advogado.nome);