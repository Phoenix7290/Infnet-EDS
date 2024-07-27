// Null é um literal no JavaScript que representa nulo. Costumeiramente, é a ausência intencional de qualquer valor e/ou objeto. Além de que diferente do undefined, deve ser definido manualmente. Pode ser útil em alguns casos. Veja exemplos abaixo:

const nulo = null;
console.log(nulo);
let equipamento = {performance: "alta"};
equipamento = null;
console.log(equipamento);

// Undefined é um literal no JavaScript que representa indefinido. Algumas características seriam que por ser vazio é o valor padrão de variáveis e parâmetros de funções qua não foram iniciadas, além de que é retornado quando se tenta acessar uma propriedade inexistente de um objeto. Veja exemplos abaixo:

let a;
console.log(a);
const obj = {};
console.log(obj.algumacoisa);
function funcaoExemplo (parametro) {
  console.log(parametro);
};
funcaoExemplo();
