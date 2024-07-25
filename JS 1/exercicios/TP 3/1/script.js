const nivel = prompt("Nível");
switch (nivel) {
  case "Estágio":
    console.log("R$ 1500.00");
    break;
  case "Trainee": 
    console.log("R$ 2000.00");
    break;
  case "Júnior": 
    console.log("R$ 2500.00"); 
    break;
  case "Pleno": 
    console.log("R$ 4000.00"); 
    break;
  case "Sênior": 
    console.log("R$ 6000.00"); 
    break;
  default:
    console.log("Nível desconhecido.");
}
