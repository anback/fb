let getArray = (numberOfElements) => {
  let array = []
  for (let i = 0; i < numberOfElements; i++) array.push(i)
  return array
}

let c = 0
let fun1 = (n) =>
{
    if (n <= 1) return n;
    c++
    return 2*fun1(n-1);
}

let d = 0
let fun2 = (n) =>
{
    if (n <= 1) return n;
    d++
    return fun2(n-1) + fun2(n-1);
}

let whatever = (n) => {
  fun1(n)
  fun2(n)

  console.log(c)
  console.log(d)
  c= 0
  d = 0
}

whatever(5)
whatever(10)
whatever(15)
