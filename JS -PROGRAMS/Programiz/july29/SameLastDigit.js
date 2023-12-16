const checkLastDigit = (a, b, c) => {
  const a1 = a % 10;
  const b2 = b % 10;
  const c2 = c % 10;

  if (a1 == b2 && a1 == c2) {
    return "Same digits";
  } else {
    return "Not same";
  }
};

console.log(checkLastDigit(6, 16, 26));
