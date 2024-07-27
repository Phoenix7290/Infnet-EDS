class NameToShortError extends Error {}
class NameToLongError extends Error {}
class SurnameToShortError extends Error {}
class SurnameToLongError extends Error {}

function getNomeCompleto(nome, sobrenome) {
  if (nome.length < 2) {
    throw new NameToShortError();
  } else if (nome.length > 15) {
    throw new NameToLongError();
  } else if (sobrenome.length < 3) {
    throw new SurnameToShortError();
  } else if (sobrenome.length > 20) {
    throw new SurnameToLongError();
  } else {
    return `${nome} ${sobrenome}`
  }
}

let errorOccurred = true;
let fullName = null;

// Utilizei While para facilitar o teste.

while (errorOccurred) {
  try {
    const userName = prompt("Qual seu nome?");
    const userSurname = prompt("Qual seu sobrenome?");

    fullName = getNomeCompleto(userName, userSurname);
    console.log(fullName);
    errorOccurred = false;
  } catch (error) {
    if (error instanceof NameToShortError) {
      alert("O nome precisa ter pelo menos dois caracteres");
    } else if (error instanceof NameToLongError) {
      alert("O nome só pode ter até quinze caracteres");
    } else if (error instanceof SurnameToShortError) {
      alert("O sobrenome precisa ter pelo menos três caracteres");
    } else if (error instanceof SurnameToLongError) {
      alert("O sobrenome só pode ter até vinte caracteres");
    } else {
      alert("Erro desconhecido");
    }
  }
}

alert(`Seu nome completo é ${fullName}`);