let hash = {}
let array = []

let push = (stackId, value) => {
  if(!hash[stackId]) hash[stackId] = []
  hash[stackId].push(array.length)
  array.push(value)
}

let pop = (stackId) => {
  let index = hash[stackId].pop()
  if(index === undefined) return null

  let value = array.splice(index, 1)[0]
  Object.keys(hash).forEach(stackId => hash[stackId].filter(i => i >= index).forEach((x, i) => hash[stackId][i]--))
  
  return value
}

push(0, 0)
push(0, 1)
push(1, 1)
console.log(pop(0))
console.log(pop(1))
console.log(pop(0))
console.log(pop(1))