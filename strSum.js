
let strSum = (str1, str2) => {
  if(str1.length > str2.length) str2 = Array(str1.length - str2.length).fill('0').join('') + str2
  if(str2.length > str1.length) str1 = Array(str2.length - str1.length).fill('0').join('') + str1

  let length = str1.length
  return str1.split('').reduce((a, b, i) => {
    let {carry, res} = a
    let sum = parseInt(str1[length - i - 1]) + parseInt(str2[length - i - 1]) + carry

    if(sum >= 10 && i < length - 1) return {carry: Math.floor(sum / 10), res: res + sum % 10}
    return {carry: 0, res: sum + res}
  }, {carry: 0, res: ''}).res
}

console.log(strSum("666", "1"))


/*
Your previous Plain Text content is preserved below:

Given 2 strings representing very large numbers (these are not representable as a BigInteger or other various type) write a method for adding the two numbers and returning their sum.

// example
12 + 23 = 35
// acknowledge the example
is this correct?

// high level solution
// i want to mimic how you normally do this in your head, i would like to starting from right, sum the two lowest integers and if more than 10, "carry", it over to the next rightmost integer and iterate thorugh the number (str), and in the end return the resulting addition,

// ack high level solution
// is this correct ?
// start coding
 */
