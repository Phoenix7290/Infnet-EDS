const numbers = [9, 25, 64, 81, 100];

const squareRoot = mapSquareRoot(numbers);

console.log(`O Array original é ${numbers} cujas raízes quadradas são ${squareRoot}`);

function mapSquareRoot (arr) {
  return arr.map(Math.sqrt);
};