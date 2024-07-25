const num = 1;

switch (num) {
  case '1':
    answer = "one";
    break;
  case 1:
    answer = 1;
    break;
  case 2:
    answer = "this is the one";
    break;
  default:
    answer = "not working";
}

console.log(answer);
