function getIdade (dia, mes, ano) {
    const dataAtual = new Date();
    let nascimento = new Date(ano, mes -1, dia);
  
    let idadeAno = dataAtual.getFullYear() - nascimento.getFullYear();
    let idadeMes = dataAtual.getMonth() - nascimento.getMonth();
  
    if (dataAtual.getDate() < dia) {
      idadeMes--;
    }
  
    if (idadeMes < 0) {
      idadeAno--;
      idadeMes += 12;
    }
  
    const idade = {idadeAno: idadeAno, idadeMes: idadeMes};
    return idade;
  }
  
  //Aprendi a trabalhar Date, Object e Sofrimento aqui. Top experiências 10/10.
  //Decidi usar object pois o calculo do mes estava errado por algum pequeno período. Aprendi também idadeA.idadeAno para acessar valores. Interessante. Pode ver a lógica mas 1000 e tantas linhas.
  
  let idadeA = getIdade(1, 1, 1990);
  console.log(idadeA.idadeAno + " anos e " + idadeA.idadeMes + " meses");
  
  let idadeB = getIdade(11, 9, 2002);
  console.log(idadeB.idadeAno + " anos e " + idadeB.idadeMes + " meses");
  
  let idadeC = getIdade(7, 5, 1991);
  console.log(idadeC.idadeAno + " anos e " + idadeC.idadeMes + " meses");
  
  let idadeD = getIdade(11, 4, 2006);
  console.log(idadeD.idadeAno + " anos e " + idadeD.idadeMes + " meses");
  
  let idadeE = getIdade(12, 6, 2006);
  console.log(idadeE.idadeAno + " anos e " + idadeE.idadeMes + " meses");
  
  let idadeF = getIdade(30, 3, 1991);
  console.log(idadeF.idadeAno + " anos e " + idadeF.idadeMes + " meses");
  
  
  // function getIdade (dia, mes, ano) {
  //   const data = new Date();
  //   let nascimento = new Date(ano, mes, dia);
  
  //   if (data.getDate() < dia) {
  //     const diaMes = new Date(data.getFullYear(), data.getMonth(), 0).getDate();
  //     if (dia <= diaMes) {
  //       mes--;
  //     }
  //   }
  
  //   const diferencaData = data - nascimento;
  //   const idadeAno = diferencaData / (365 * 24 * 60 * 60 * 1000);
  //   const idadeMes = ((idadeAno % 1) * 12).toFixed(0);
  
  //   const idade = {idadeAno: Math.floor(idadeAno) , idadeMes: parseInt(idadeMes)};
  //   return idade;
  // }