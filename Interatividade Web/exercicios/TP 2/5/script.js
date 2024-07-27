let styleText = document.createElement("style");
styleText.textContent = `
.titulo {
  text-align: center;
  color: white;
  background-color: blue;
}`;

document.head.appendChild(styleText);

let changeH1 = document.getElementById("titulo");

function change () {
  changeH1.classList.toggle("titulo");
};

changeH1.addEventListener("click", change);