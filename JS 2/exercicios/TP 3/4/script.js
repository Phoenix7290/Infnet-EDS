const userGrade1 = parseFloat(prompt("Qual foi sua primeira nota?"));
const userGrade2 = parseFloat(prompt("Qual foi sua segunda nota?"));
const userGrade3 = parseFloat(prompt("Qual foi sua terceira nota?"));

function gradeAverage (userGrade1, userGrade2, userGrade3) {
  return ((userGrade1 + userGrade2 + userGrade3) / 3).toFixed(2);
};

let selectH2 = document.getElementById("resultado");
selectH2.textContent = "A média das notas " +  userGrade1 + " , " + userGrade2 + " e " +  userGrade3 + " é: " + gradeAverage(userGrade1, userGrade2, userGrade3);

console.log("A média das notas " +  userGrade1 + " , " + userGrade2 + " e " +  userGrade3 + " é: " + gradeAverage(userGrade1, userGrade2, userGrade3));