const buttonAll = document.querySelectorAll("button");
console.log(buttonAll);

buttonAll.forEach((button) => {
  button.addEventListener("click", function detectValor(event) {
    const tr = event.target.closest("tr");
    const nota = tr.querySelector(".nota");
    if (nota) {
      let notaValor = Number(nota.textContent);
        if (notaValor >= 5) {
          tr.classList.add("verde");
        } else if (notaValor < 5) {
          tr.classList.add("vermelho");
        }
      }
    });
});

// function detectValor (event) {
//   const tr = event.target.closest("tr");
//   const nota = tr.querySelector(".nota");
//   if (nota) {
//     let notaValor = Number(nota.textContent);
//     if (notaValor >= 5) {
//       tr.classList.add("verde");
//     } else if (notaValor < 5) {
//       tr.classList.add("vermelho");
//     }
//   }
// };
