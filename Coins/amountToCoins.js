function round(x) {
    return Number(x.toFixed(2))
}

function amountToCoins(amount, coins) {
    let result = Array(coins.length).fill(0)
    let rates = [0.25, 0.1, 0.05, 0.01]

    for (let i = 0; i < coins.length; i++) {
        let need = Math.floor(amount / rates[i])
        if (need) {
            if (coins[i] >= need) {
                result[i] += need
                amount -= need * rates[i]
            } else {
                result[i] += coins[i]
                amount -= coins[i] * rates[i] 
            }
            amount = round(amount)
            if (!amount) {
                break
            }
        }
    }
    return [result, amount]
}