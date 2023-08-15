
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getDepositFieldById('deposit-field');
    const previousDepositTotal = getTextElementById('deposit-total')
    const newDeposit = newDepositAmount + previousDepositTotal;
    setTextElementValueById('deposit-total', newDeposit);

    const previousBalance = getTextElementById('balance-total');
    const newBalance = previousBalance + newDepositAmount;
    setTextElementValueById('balance-total', newBalance);

})