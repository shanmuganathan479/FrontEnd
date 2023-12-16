function regex(val) {
  const vowelRegex = /[aeiou]/i;
  const findFirst = vowelRegex.test(val[0]);
  const findLast = vowelRegex.test(val[val.length - 1]);

  return findFirst && findLast;
}
console.log(regex("IndiumsoftwarE"));
