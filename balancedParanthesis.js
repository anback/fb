
let removeChars = (str) => {
  let splits = str.split('')
  
  let arr = []
  splits.forEach((char, i) => {
    if(char === '(') arr.push({i, char})
    if(char === ')') arr.pop()
  })
  
  return splits.filter((char, i) => !arr.map(obj => obj.i).includes(i)).join('')
}

console.log(removeChars('words ('))
console.log(removeChars('(words'))
console.log(removeChars('((words)'))
console.log(removeChars('((((((()()()((words)'))


