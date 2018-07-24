

let howManyIslands = (area) => {
  let n = area.length
  let m = area[0].length
  let islands = []
  for(let i = 0; i < n; i++)
    for(let j = 0; j < m; j++)
      if(isNotPartOfIslands(i, j, area) && area[i][j] === 1)
        islands.push(findIsland(i,j, area, islands))

  return islands.filter(({length}) => length > 0).length
}

let isNotPartOfIsland = (x,y, island) => !island.some(p => p.x === x && p.y === y)
let isNotPartOfIslands = (i,j, islands) => islands.length === 0 ? true : islands.every(island => isNotPartOfIsland(i,j, island))

let findIsland = (i, j, area, islands, res = []) => {
  if(!isNotPartOfIslands(i,j, islands)) return res
  if(!isNotPartOfIsland(i,j, res)) return res
  if(!area[i]) return res
  if(!area[i][j]) return res
  if(area[i][j] === 0) return res

  res.push({x: i, y: j})
  findIsland(i+1, j, area, islands, res)
  findIsland(i, j+1, area, islands, res)
  return res
}

console.log(howManyIslands(
[
  [0,1,0,1,1],
  [0,1,0,0,1],
  [0,1,1,1,1]
]
))

/*
Your previous Plain Text content is preserved below:

"""
Given a 2d array of 0s and 1s, 0 means water,
1 means land, connected 1s form an island,
count the number of islands on this map.
01010
01001
01101
returns 3
"""


010
001
100

return 3

01000
00010

return 2

01
10

return 2 (only up, down, right, left counts right ?)

// High level solution
use 2 forEach loops, go through every node, once you find a node, use recursive function to search greedly for "island tiles", store island tiles in array and
// for next iterations dont search island tiles that are in result array, in the end count the number of greedy searches you had to do,

// is this high level ok ?

 */
