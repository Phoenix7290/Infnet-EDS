let a = 0;
let b = 1;

for (let i = 2; i <= 20; i++) {
  const nextNumber = a+b;
  a = b;
  b = nextNumber;
};

console.log(b);