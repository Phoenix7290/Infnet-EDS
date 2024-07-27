document.addEventListener("DOMContentLoaded", function () {
    const fruits1 = ["Maçã", "Pêra", "Goiaba"];
    const fruits2 = ["Maracuja", "Uva", "Laranja"];
  
    const allFruits = fruits1.concat(fruits2);
  
    const list = document.getElementById("lista");
  
    allFruits.forEach (fruit => {
      const li = document.createElement("li");
      li.textContent = fruit;
      list.appendChild(li);
    })
  });