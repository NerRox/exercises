let rates = {Q: 0.25, D: 0.1, N: 0.05, P: 0.01}

function round(x) {
  return Number(x.toFixed(2))
}

function amountToCoins(amount, coins) {
  let result = {qs: 0, ds: 0, ns: 0, ps: 0}

  let result = [0, 0, 0, 0]
  let need = []

  need[0] = Math.floor(amount / rates[0])
  if (need[0]) {
    if (coins[0] >= need[0]) {
      result[0] += need[0]
      amount -= need[0] * rates[0]
    } else {
      result[0] += coins[0]
      amount -= coins[0] * rates[0]
    }
    amount = round(amount)
    if (!amount) {
      return [result, amount]
    }
  }


  let needQs = Math.floor(amount / rates.Q)
  if (needQs) {
    if (coins.qs >= needQs) {
      result.qs += needQs
      amount -= needQs * rates.Q
    } else {
      result.qs += coins.qs
      amount -= coins.qs * rates.Q
    }
    amount = round(amount)
    if (!amount) {
      return [result, amount]
    }
  }

  let needDs = Math.floor(amount / rates.D)
  if (needDs) {
    if (coins.ds >= needDs) {
      result.ds += needDs
      amount -= needDs * rates.D
    } else {
      result.ds += coins.ds
      amount -= coins.ds * rates.D
    }
    amount = round(amount)
    if (!amount) {
      return [result, amount]
    }
  }

  let needNs = Math.floor(amount / rates.N)
  if (needNs) {
    if (coins.ns >= needNs) {
      result.ns += needNs
      amount -= needNs * rates.N
    } else {
      result.ns += coins.ns
      amount -= coins.ns * rates.N
    }
    amount = round(amount)
    if (!amount) {
      return [result, amount]
    }
  }

  let needPs = Math.floor(amount / rates.P)
  if (needPs) {
    if (coins.ps >= needPs) {
      result.ps += needPs
      amount -= needPs * rates.P
    } else {
      result.ps += coins.ps
      amount -= coins.ps * rates.P
    }
    amount = round(amount)
  }
  return [result, amount]
}
