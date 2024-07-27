const liElem = document.body.children[0].children[1];
console.log(liElem);

liElem.addEventListener("click", function () {
  this.parentNode.className = "listaSelecionada";
});
