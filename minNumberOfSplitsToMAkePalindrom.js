let getSplits = (str, numberOfSplits = 0) => {
  if(isPalindrom(str)) return numberOfSplits
    
  let array = []
  for(let i = 1; i < str.length; i++) {
    let pre = str.split('').filter((x, j) => j < i).join('')
    let post = str.split('').filter((x, j) => j >= i).join('')
    array.push(getSplits(pre, numberOfSplits) + getSplits(post, numberOfSplits) + 1)
  }
                             
  return numberOfSplits + Math.min(...array)
}

let isPalindrom = (str) => str.split('').every((char, i) => char === str[str.length - 1 - i])

console.log(getSplits('abbab')) // 1
console.log(getSplits('abba')) // 0
console.log(getSplits('abb')) // 1
console.log(getSplits('abc')) // 2
console.log(getSplits('abbc')) // 2
console.log(getSplits('abbcdefg')) // 6
console.log(getSplits('abbacdefg')) // 5
console.log(getSplits('palindrom')) // 8
console.log(getSplits('nonon')) // 0
console.log(getSplits('nononxnonon')) // 0

/* 
Your previous Plain Text content is preserved below:

A string can be partitioned into some substrings, such that each substring is a palindrome. For example, there are a few strategies to split the string “abbab” into palindrome substrings, such as: “abba”|”b”, “a”|”b”|”bab” and “a”|”bb”|”a”|”b”. 
Given a string str, please get the minimal numbers of splits to partition it into palindromes. The minimal number of splits to partition the string “abbab” into a set of palindromes is 1.

//example
“abbab” into palindrome substrings, 
“abba”|”b”
Answer: 1

//Acknowledge example, is above example correct ?

// High level solution
first check if str is palindrom => return 0
then go through whole string and split on every character and see which strings are not palindrom yet, then i want to recursively go into these strings and check if theey are palindroms and keep splitting. 
send an object through the recursive calls that keep track of how many times its splitted

// Acknowledge high level solution
is a recursive solution ok here ?

// start coding


// debug, log troubleshoot solution

// reason about time complexity/ space complexity

 */