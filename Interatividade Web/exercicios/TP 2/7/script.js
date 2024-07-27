let paragraph = document.querySelectorAll('p');
let buttonDiv = document.querySelector("button");
let changeDiv = document.getElementById("card");

let toggleButton = document.querySelector("button");

function toggleDiv () {
  paragraph.forEach(p => p.classList.toggle("desaparecer"));
  if(changeDiv.style.backgroundColor === 'blue') {
    changeDiv.style.backgroundColor = '';
  } else {
    changeDiv.style.backgroundColor = 'blue';
  }
}

toggleButton.addEventListener("click", toggleDiv);