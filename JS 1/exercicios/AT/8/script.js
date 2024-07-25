const truthyA = 1; /* <-- Preencher com exemplo de valor truthy */
const truthyB = " "; /* <-- Preencher com exemplo de valor truthy */
const truthyC = -1; /* <-- Preencher com exemplo de valor truthy */

const falsyA = 0; /* <-- Preencher com exemplo de valor falsy */
const falsyB = ""; /* <-- Preencher com exemplo de valor falsy */
const falsyC = NaN; /* <-- Preencher com exemplo de valor falsy */

alert(
  !!truthyA &&
  !!truthyB &&
  !!truthyC &&
  !falsyA &&
  !falsyB &&
  !falsyC
);