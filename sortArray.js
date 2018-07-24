
let sort = (arr) => {

  let a = {}
  let n = arr.length
  for(let i = 0; i < n; i++) {
    let str = arr.shift()
    let lastChar = str[str.length - 1]
    if(!a[lastChar]) a[lastChar] = []

    a[lastChar].push(str)
  }

  return Object.keys(a).reduce((res,key) => res.concat(a[key]), [])
}

console.log(sort(['a1', 'a2', 'b1', 'b2']))
/*
Your previous Plain Text content is preserved below:

Given an aray with ['a1', 'a2', .....'aN', 'b1', 'b2', ....'bN', 'c1', 'c2', .....'cN'],
stagger the subarrays so it becomes ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', ...'aN', 'bN', 'cN']. The optimal solution requires linear-time
sorting and a constant space complexity.

//example

['a1', 'a2', 'b1', 'b2'] => ['a1', 'b1', 'a2', 'b2']
correct ?

// high level solution
// so i am thinking i can reduce over the array, forming 2 iteration variables, one called res another is a hash of indexes keeping track of the ighest index the strings with suffixes 1,2,3,...n have. 
// in reduce we shift the arr and unshift the resulting array, this has linear time complexity bit not constant space complexity because of the hash structure, hmmm,
 */
