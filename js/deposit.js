// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount form the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // step-3: get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // * set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    // step-5: add numbers to balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);
    // step-6: calculate current total balance amount 
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    // * set the balance total
    balanceTotalElement.innerText = currentTotalBalance;

    // step-7: clear the deposit field 
    depositField.value = '';
})