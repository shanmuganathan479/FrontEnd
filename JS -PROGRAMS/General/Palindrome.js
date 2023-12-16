// const value = "madam"

// const reverse = value.split("").reverse().join("")
// console.log(value == reverse)

const palindrome =(string)=>{
const reverse = string.split("").reverse().join("")
// console.log(reverse)
  if (string.toLowerCase() == reverse.toLowerCase()) {
    return true
  } else {
    return false
  }
}

console.log(palindrome("Madam"))