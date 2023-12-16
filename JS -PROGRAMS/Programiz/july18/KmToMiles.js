const KilometerToMiles = (value) => {
  const factor = 0.621371;
  const result = value * 0.621371;

  console.log(`${value} KM is ${result} in miles`);
};

KilometerToMiles(5)