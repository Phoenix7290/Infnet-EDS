const userName = prompt("Qual o seu nome?");
const userAge = Number(prompt("Qual a sua idade?"));
const userEmail = prompt("Qual o seu E-mail?")
const userProfession = prompt("Qual a sua profissão?");
const userNacionality = prompt("Qual a sua naturalidade (Estado de origem)?");

const pessoa = {
  name: userName,
  age: userAge,
  email: userEmail,
  profession: userProfession,
  nacionality: userNacionality
};

let createParagraphs = document.createElement("p");
createParagraphs.innerHTML = `
  Nome: ${pessoa.name}<br>
  Idade: ${pessoa.age}<br>
  E-mail: ${pessoa.email}<br>
  Profissão: ${pessoa.profession}<br>
  Naturalidade: ${pessoa.nacionality}
`;

// Estava pensando nisso, mas resultará em object object. Acredito que transformar em string seja melhor.
document.body.appendChild(createParagraphs);
