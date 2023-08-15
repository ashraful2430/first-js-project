document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawFieldElementString = withdrawFieldElement.value;
    const newWithdraw = parseFloat(withdrawFieldElementString);

    withdrawFieldElement.value = '';

    if (isNaN(newWithdraw)) {
        alert('ata bank re bokachoda number de word na ')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const previousTotalWithdraw = parseFloat(withdrawTotalElementString);



    const balanceField = document.getElementById('balance-total');
    const balanceFieldString = balanceField.innerText;
    const newBalance = parseFloat(balanceFieldString);

    if (newWithdraw > newBalance) {
        alert('hedar put')
        return;
    }


    const newWithdrawAmount = newWithdraw + previousTotalWithdraw;
    withdrawTotalElement.innerText = newWithdrawAmount;

    const newBalanceField = newBalance - newWithdraw;
    balanceField.innerText = newBalanceField;




})