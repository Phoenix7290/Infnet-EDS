let buttonDom = document.createElement("button");
buttonDom.textContent = "inserir";

document.body.appendChild(buttonDom);

buttonDom.addEventListener("click", function() {
  let liDom = document.createElement("li");
  liDom.textContent = "nova entrada";

  let findUl = document.getElementById("lista");
  findUl.appendChild(liDom);
});
