console.log(coinsToAmount({qs: 4})) // 1
console.log(coinsToAmount({ds: 2})) // 0.2


function coinsToAmount(coins) {
  let val = Object.keys(coins)
  let rates = {
              qs: 0.25,
              ds: 0.1,
              ns: 0.05,
              ps: 0.01
  }

  let res = val.reduce(function(sum, calc) {
    return sum + coins[calc] * rates[calc]
  }, 0)

  return res
}
