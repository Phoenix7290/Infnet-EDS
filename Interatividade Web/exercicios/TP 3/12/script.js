let cores = ["corVerde", "corRoxa", "corVermelha", "corLaranja"];
let botaoCriar = document.querySelector("button");
let divNovo = document.querySelector("#novo");
let containers = document.querySelectorAll(".container");
let caixinhaArrastada = null;

botaoCriar.addEventListener("click", function() {
  let div = document.createElement("div");
  //Lógica interessante da internet
  div.className = "caixinha " + cores[Math.floor(Math.random() * cores.length)];
  div.draggable = true;
  div.addEventListener("dragstart", function (event) {
    caixinhaArrastada = event.target;
  });
  divNovo.appendChild(div);
});

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("dragover", function (event) {
    event.preventDefault();
    if (caixinhaArrastada) {
      containers[i].appendChild(caixinhaArrastada);
    }
  });
}

divNovo.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});