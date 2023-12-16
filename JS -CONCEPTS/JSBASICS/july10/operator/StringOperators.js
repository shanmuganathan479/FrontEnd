// String operator

// +

console.log("shan "+"stark")
console.log(5+5)
console.log(5+"5")
console.log("shan"+"6")

// Ternary or condtional ? :

const condtion =  5 <10 ? "Yeah right...." : "Nope wrong"

console.log(condtion)


console.log("TYPE - CONVERSION-------------------------------------------------------")
console.log("IMPLICIT CONVERSION---------------")
// IMPLICIT CONVERSION---------------
// JS AUTOMATICALLY CONVERTS 
// For other -,*,% it will automatically converts to number

console.log("Except +")
console.log("6"-"6")
console.log("6"*"6")
console.log("6"%"6")

// One string with number
console.log("One string with number")
console.log("7"-6)
console.log("shan"-3348)  //Nan 
// console.log("shan"-3348) For + it will join

// Boolean
console.log("Boolean")
console.log("shan"+true)

// Null treated as 0

console.log("Null")
console.log(5-null)



// EXPLICIT CONVERSION-----------------------------------------
console.log("EXPLICIT CONVERSION--------------------------------")
// Manually converts the data type for this we have a in built methods

console.log("Number--",Number("3348"))
console.log(Number(false))
console.log(Number(true))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number(""))


console.log("ParseInt ParseFloat")
console.log(parseInt("3348"))
console.log(parseFloat("33.48"))

// String----------------------------------------
console.log("String---------------------------------------")
console.log(String(1000))
console.log(String(true))
console.log(String(undefined))
console.log(String(null))

// Alternative toString()
console.log("toString --------------------")
console.log((5000).toString())


//Boolean
console.log("Boolean ----------------------------")
console.log(Boolean(100))
console.log(Boolean(-100))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))


