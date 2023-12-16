const FindSign = (number) => {
  if (number >= 0) {
    if (number == 0) {
      console.log("Zero");
    } else {
      console.log("Positive");
    }
  } else {
    console.log("Negative");
  }
};
FindSign(-12);

