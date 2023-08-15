document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = getDepositFieldById('withdraw-field');
    const previousWithdraw = getTextElementById('withdraw-total');
    const newWithdraw = withdrawAmount + previousWithdraw;
    setTextElementValueById('withdraw-total', newWithdraw);

    const balance = getTextElementById ('balance-total');
    const newBalance = balance - withdrawAmount;
    setTextElementValueById ('balance-total', newBalance);
})




