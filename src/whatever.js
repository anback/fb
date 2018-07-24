let array = [10,20,30,40,50,70, 10, 100, 0, 80, 300]

let highestProfit = (prices) =>
  prices.reduce((a, b, i, arr) => {
    if(a.min > b) a.min = b
    if(a.profit < b - a.min) a.profit = b - a.min
    return a
  }, {min: 0, profit: 0}).profit

console.log(highestProfit(array))
