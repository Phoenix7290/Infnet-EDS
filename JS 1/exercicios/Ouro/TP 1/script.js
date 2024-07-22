const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener(
  "click",
  () => (counter.value = Number(counter.value) + 1)
);

decrement.addEventListener(
  "click",
  () => (counter.value = Number(counter.value) - 1)
);