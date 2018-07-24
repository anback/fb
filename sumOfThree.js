
//example
// 512 => 521

// High level solution: 
// we need to find 2 numbers such as the first number isleft of second number and first number is smaller than second number, so first we check the diff of a number with respect to the rightmost number then rightmostnumber -1 -2 -3 etc once we found a nubmer satisfying the above we return it. 

let sumOfThree = (arr, c) => {
  for(let i = 0; i<arr.length - 2; i++) 
    for(let j = i+1; j<arr.length - 1; j++)
      for(let k = i+2; k<arr.length; k++)
        if(i < j && j < k)
          if(arr[i] + arr[j] + arr[k] === c) return true
  return false
}

console.log(sumOfThree([1,2,3,4], 6))



//example
// 512 => 521

// High level solution: 
// we need to find 2 numbers such as the first number isleft of second number and first number is smaller than second number, so first we check the diff of a number with respect to the rightmost number then rightmostnumber -1 -2 -3 etc once we found a nubmer satisfying the above we return it. 

let sumOfThree = (arr, c) => {
  arr.sort((a,b) => a-b)
  for(let i = 0; i<arr.length - 2; i++)
  {
    let right = arr.length - 1
    let left = i + 1
    while(left < right) {
      let tripletSum = arr[i] + arr[left] + arr[right]
      if(tripletSum < c) left++
      if(tripletSum > c) right--
      if(tripletSum === c) return true
    }
  }
  
  return false
}

console.log(sumOfThree([1,2,3,4], 60))