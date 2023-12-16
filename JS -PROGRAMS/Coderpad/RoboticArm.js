function RoboticArm() {
  let boxes = [3, 1, 2, 2];
  // let boxes = [4, 3, 1, 2, 2,9,7,70,8];

  const findValue = boxes.filter((item, index, array) => {
    // return
    // console.log(array.indexOf(item) !== index);
    // console.log(array)
    return array.indexOf(item) !== index;
  });

  const biggerValues = [];
  const smallerValues = [];

  for (let i = 0; i <= boxes.length; i++) {
    if (boxes[i] == findValue) {
    } else if (boxes[i] > findValue) {
      biggerValues.push(boxes[i]);
    } else if (boxes[i] < findValue) {
      smallerValues.push(boxes[i]);
    }
  }

  if (biggerValues.length && smallerValues.length) {
    for (let j = 0; j < biggerValues.length; j++) {
      const findBigIndex = boxes.indexOf(Number(biggerValues[j]));
      const replaceBig = boxes.splice(findBigIndex, 1, Number(findValue));
    }
    for (let k = 0; k < biggerValues.length; k++) {
      const findSmallIndex = boxes.indexOf(Number(smallerValues[k]));
      const replaceSmall = boxes.splice(findSmallIndex, 1, Number(findValue));
    }
    return boxes;
  }
}
console.log(RoboticArm());
