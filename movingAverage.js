let ma = (arr, N) =>
  arr.reduce((a,b, i) => {
    if(i === 0) a.push(b)
    else a.push(a[a.length - 1] + b/N - arr[Math.max(i-N, 0)]/N)
    return a
  }, [])

console.log(ma([1,2,3,4], 2))
console.log(ma([1,2,3,4], 4))
console.log(ma([1,2,3,4,4,4,4], 4))
