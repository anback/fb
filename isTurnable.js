

let isTurnable = (arr) => arr.every((a, i) => isTurnablePair(arr[arr.length - 1 - i], a))

let isTurnablePair = (a,b) => {

  if(a === 1 && b === 1) return true
  if(a === 8 && b === 8) return true
  if(a === 0 && b === 0) return true
  if(a === 6 && b === 9) return true
  if(a === 9 && b === 6) return true
  return false
}

console.log(isTurnable([1, 6, 0, 9, 1]))
console.log(isTurnable([1, 7, 1]))
