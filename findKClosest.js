
let findKClosestPoints = (points, k) =>
  points.map(p => ({p, dist: dist(p)}))
        .sort((a,b) => a.dist - b.dist)
        .filter((p, i) => i < k)
        .map(obj => obj.p)

let dist = ([x,y]) => Math.sqrt(x^2 + y^2)

let points = [[1,2], [3,4], [6,7], [1,1]]

console.log(findKClosestPoints(points, 1))
console.log(findKClosestPoints(points, 2))
