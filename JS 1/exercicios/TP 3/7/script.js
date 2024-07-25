let genero = prompt("Qual o seu sexo? (M ou F)");
let idade = Number(prompt ("Qual sua idade?"));
let viagens = Number(prompt("Quantas viagens já realizou?"));

if ((genero === "M" && idade >= 40) || (genero === "M" && viagens <= 2) ||(genero ==="M" && idade >= 35 && viagens <= 1) || (genero === "F" && idade >= 35) || (genero === "F" && viagens <= 3) || (genero === "F" && idade >= 30 && viagens <= 2)) {
  alert("Você pode viajar com promoção!");
} else {
  alert("Você não pode viajar com promoção.");
}