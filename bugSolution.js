function foo(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return foo(a - 1, b - 1);
}

//Corrected version
function fooCorrected(a, b) {
  if (a === 0 || b === 0) {
    return a + b; //Corrected return statement
  }
  return fooCorrected(a - 1, b - 1);
}