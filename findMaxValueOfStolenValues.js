
let findMaxValue = (values, value = 0) => {
  // base case
  if(values.length === 0) return value
  if(values.length === 1) return value + values[0]
  if(values.length === 2) return value + Math.max(values[0], values[1])
  if(values.length === 3) return value + Math.max(values[0] + values[2], values[1])
  
  let array = []
  
  for(let i = 1; i < values.length; i++) {
    let pre = values.filter((x,j) => j < i - 1)
    let post = values.filter((x,j) => j > i + 1)
    array.push(findMaxValue(pre, value) + findMaxValue(post, value) + values[i])
  }
  
  return value + Math.max(...array)
}

console.log(findMaxValue([0,2,0,2])) // answer = 4
console.log(findMaxValue([3,2,4,2])) // answer = 7
console.log(findMaxValue([3,3,4,3])) // answer = 7
console.log(findMaxValue([3,3,4,7])) // answer = 10
console.log(findMaxValue([4,3,4,7])) // answer = 11
console.log(findMaxValue([4,3,4,7,8])) // answer = 16
console.log(findMaxValue([4,3,4,7,1])) // answer = 11
console.log(findMaxValue([6,1,2,7])) // answer = 13



/* 
Your previous Plain Text content is preserved below:

There are n houses built in a line, each of which contains some value in it. A thief is going to steal the maximal value in these houses, but he cannot steal in two adjacent houses because the owner of a stolen house will tell his two neighbors on the left and right side. What is the maximal stolen value?

//example

let values = [0,2,0,2]
answer = 4

let values = [3,2,4,2]
answer = 7

let values = [3,3,4,3]
answer = 7

let values = [3,3,4,7]
answer = 10

let values = [4,3,4,7]
answer = 11

//Acknowledge example, is example correct ?
yes

// High level solution
lets solve this by recursion.
The maximum value that can be obtained is to try to start to steal from house i with values as array then add the Maxvalue of the two recursive calls: 

values[i - 2..start of array] 
values[i + 2..end of array]

base case for recursion would be: 
if(i - 2 < 0) return values[i]

// Acknowledge high level solution, is high level solution correct ?
is this correct ? do you see my reasoning ?

// start coding

// debug, log troubleshoot solution

// reason about time complexity/ space complexity



 */