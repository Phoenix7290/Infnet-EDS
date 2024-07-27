document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    container.addEventListener("click", function () {
      const span = container.querySelector("span");
      span.textContent = "teste";
    });
  });