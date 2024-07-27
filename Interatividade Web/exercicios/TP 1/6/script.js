let colégio = "Educar";
let anoDeFundacao = 1990;

let colegio = {
  nome: colégio,
  ano: anoDeFundacao
}

console.log(colegio);

colegio.nomeDiretor = "Beatriz";
colegio.numeroAlunos = 55;
colegio.telefone = "11 91234-5678";

console.log(colegio);

colegio.obterDiretor = function() {
  alert(colegio.nomeDiretor);
};

colegio.obterDiretor();