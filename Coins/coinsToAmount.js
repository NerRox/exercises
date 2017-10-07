console.log(coinsToAmount({qs: 4})) // 1
console.log(coinsToAmount({ds: 2})) // 0.2
/*Первое - ключ, второе - значение
Coins :: {qs :: number, ds :: number, ns :: number, ps :: number} тип объекта coins
qs - 25 центов
ds - 10 центов
ns - 5 центов
ps - 1 цент*/

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
