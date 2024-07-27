const blueElement = document.querySelectorAll(".azul");
const redElememt = document.querySelectorAll(".vermelho");

blueElement.forEach(element => {
  element.classList.remove("azul");
  element.classList.add("vermelho");
});

redElememt.forEach(element => {
  element.classList.remove("vermelho");
  element.classList.add("azul");
});
