function inputField(id) {
    const input = document.getElementById(id)
    const inputValue = input.value
    const inputValueAmount = parseFloat(inputValue)
    input.value = ''
    return inputValueAmount
}
function addInput(secondId, amount) {
    const previousMoney = document.getElementById(secondId)
    const previousText = previousMoney.innerText
    const previousAmount = parseFloat(previousText)
    const previousAdd = previousAmount + amount
    previousMoney.innerText = previousAdd
}
function balanceMoney(amount, check) {
    const previousBalance = document.getElementById('balance-total')
    const previousBalanceText = previousBalance.innerText
    const previousBalanceAmount = parseFloat(previousBalanceText)
    if (check == true) {
        const balanceAmount = previousBalanceAmount + amount
        previousBalance.innerText = balanceAmount
    }
    else {
        const balanceAmount = previousBalanceAmount - amount
        previousBalance.innerText = balanceAmount
    }

}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputAmount = inputField('deposit')
    addInput('deposit-total', inputAmount)
    balanceMoney(inputAmount, true)


})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputAmount = inputField('withdraw')
    addInput('withdraw-total', inputAmount)
    balanceMoney(inputAmount, false)
})