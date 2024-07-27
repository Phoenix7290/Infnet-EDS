let divModal = document.getElementById("modal");
divModal.classList.add("hide");


let button = document.querySelector("button")
button.addEventListener("click", function() {
  divModal.classList.remove("hide");
});

let imgClose = document.getElementById("close");
imgClose.addEventListener("click", function() {
  divModal.classList.add("hide");
});
