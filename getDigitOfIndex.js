
let getDigitOfIndex = (index) => {
  
  let array = []
  let c = 0
  while(index >= array.length) {
    array = array.concat(`${c}`.split(''))
    c++
  }
  
  return array[index]
}

console.log(getDigitOfIndex(30))
/* 
Your previous Plain Text content is preserved below:

Problem: Numbers are serialized increasingly into a sequence in the format of 0123456789101112131415..., which each digit occupies a position in the sequence. For instance, the digit in the position 5 is 5, in the position 13 is 1, in the position 19 is 4, and so on.

Please write a function/method to get the digit on any given position.

example: 

0123456789101112131415

10,11,12,13....99 = 90 numbers
100 => 999 => 900 numbers

first 10 numbers take up 1 slot
next 90 numbers take up 2 slots
next 900 numbers take up 3 slots
next 9000 numbers take up 4 slots

first get the currect "number" of a given index (and its index boudaries)
then get the digit in the number

position: 0
return 0

position: 1
return 1

position: 10
return 0

//Acknowledge example
correct ? or do you want it one based ?

// High level solution
do a while loop, while lenght of array is less or equal to given index, and in while loop add numbers into an array.

// Acknowledge high level solution
is this correct ?

// start coding

// debug, log troubleshoot solution

// reason about time complexity/ space complexity

 */