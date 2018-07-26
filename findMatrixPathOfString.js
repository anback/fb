
let hasPath = (matrix, str) => {
  console.log('str', str)
  let firstChar = str[0]
  
  let entries = []
  matrix.forEach((array, i) => array.forEach((char, j) => { if(char === firstChar) entries.push({i,j}) }))
  
  return entries.some(point => _hasPath(point, matrix, str, 1))
}

let _hasPath = (point, matrix, str, index, visitedPoints = []) => {
  let {i,j} = point
  if(index === str.length) return true
  
  switch(true) {
    case !!matrix[i+1] && str[index] === matrix[i+1][j] && !isVisited(i+1, j, visitedPoints): return _hasPath({i: i + 1, j}, matrix, str, index+1, [...visitedPoints, point])
    case !!matrix[i-1] && str[index] === matrix[i-1][j] && !isVisited(i-11, j, visitedPoints): return _hasPath({i: i - 1, j}, matrix, str, index+1, [...visitedPoints, point])
    case !!matrix[j+1] && str[index] === matrix[i][j+1] && !isVisited(i, j+1, visitedPoints): return _hasPath({i, j:j+1}, matrix, str, index+1, [...visitedPoints, point])
    case !!matrix[j-1] && str[index] === matrix[i][j-1] && !isVisited(i, j-1, visitedPoints): return _hasPath({i, j:j-1}, matrix, str, index+1, [...visitedPoints, point])
    default: return false
  }
}

let isVisited = (i,j, visitedPoints) => visitedPoints.some((visitedPoint) => i === visitedPoint.i && j === visitedPoint.j)

console.log(hasPath(
[['a', 'a', 'a'],
['b', 'a', 'a'],
['a', 'a', 'a']], 'abaa'))




/* 
Your previous Plain Text content is preserved below:

How to implement a function to check whether there is a path for a string in a matrix of characters? It moves to left, right, up and down in a matrix, and a cell for a movement. The path can start from any entry in a matrix. If a cell is occupied by a character of a string on the path, it cannot be occupied by another character again.

// example

// ab

aaa
baa
aaa

return true

// ac

aaa
baa
aaa

return false


//Acknowledge example
check

// High level solution
// i would do a recursive solution, alright, the recursive function would take in an optional point in the given matrix (i,j) and a value to search for, if no point specified then search whole matrix, if point is specified then only search adjacent points, return false if no path is found, otherwise return recursive call, if last character return true

// Acknowledge high level solution
is this correct ?

// start coding

// debug, log troubleshoot solution

// reason about time complexity/ space complexity


 */