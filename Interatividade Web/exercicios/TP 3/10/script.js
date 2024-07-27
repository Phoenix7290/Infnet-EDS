window.onload = function () {
    let createul = document.createElement("ul");
    createul.id = "fruits-list";
    document.body.appendChild(createul);
    // document.body.insertBefore(createul, document.body.firstChild);
  
    const fruitsList = ["Maçã", "Banana", "Manga"];
  
    fruitsList.forEach(function(fruit) {
      let createLi = document.createElement("li");
      createLi.textContent = fruit;
      createul.appendChild(createLi);
    })
  
    const selectAllLi = document.querySelectorAll("li");
    selectAllLi.forEach(function(item) {
      item.addEventListener("click", function() {
        alert(item.textContent);
      })
    })
  };