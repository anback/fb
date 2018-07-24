
//example
// 512 => 521

// High level solution: 
// we need to find 2 numbers such as the first number isleft of second number and first number is smaller than second number, so first we check the diff of a number with respect to the rightmost number then rightmostnumber -1 -2 -3 etc once we found a nubmer satisfying the above we return it. 

let nextPermutation = (n) => {
  let splits = n.toString().split('').reverse()
  
  let res
  for(let i = 0; i<splits.length; i++) {
    let char = splits[i]
    let numb = parseInt(char)
    let nextGreaterNumb = splits
                            .map((char, i) => ({n: parseInt(char), i, char}))
                            .sort((a,b) => a.n-b.n)
                            .filter(obj => obj.n > numb)[0]
    
    if(!nextGreaterNumb) continue
    
    let arr = [...splits]
    
    arr[i] = nextGreaterNumb.char
    arr[nextGreaterNumb.i] = char
    arr=arr.reverse()
    
    let r = parseInt(arr.join(''))
    if(r < n) continue
    res = r
    break
  }
  
  return res
}

console.log(nextPermutation(123476))