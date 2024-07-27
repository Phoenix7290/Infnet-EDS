class InvalidNumberError extends Error {}
class ZeroDivisionError extends Error {}

function divide(numA, numB) {
  if (typeof numA !== 'number' || typeof numB !== 'number') {
    throw new InvalidNumberError(`Os paramentos devem ser do tipo number`);
  } else if (isNaN(numA) || isNaN(numB)) {
    throw new InvalidNumberError(`Os paramentos não devem ser NaN`);
  } else if (numA === 0 || numB === 0) {
    throw new ZeroDivisionError(`Os paramentos não devem ser zero`);
  } else {
    return numA / numB;
  }
}

console.log(divide(8,4));
// console.log(divide(8, "4"));
// console.log(divide(NaN, 4));
// console.log(divide(4, 0));
