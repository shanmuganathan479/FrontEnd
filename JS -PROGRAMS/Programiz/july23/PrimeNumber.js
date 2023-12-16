const PrimeNumber = (num) => {
  var isPrime = false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = true;
    //   console.log(i, num % i == 0);
    }
  }

  if (isPrime) {
    return "Not a prime number";
  } else {
    return "prime number";
  }
};

console.log(PrimeNumber(44));
