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
            } else { // если amount меньше номинала монет
                result[i] += coins[i] // записть кол-ва монет в результат
                amount -= coins[i] * rates[i] // вычитаем сумму всех предыдущих монет
            }
            amount = round(amount)
            if (!amount) {
                break
            }
        }
    }
    return [result, amount]
}