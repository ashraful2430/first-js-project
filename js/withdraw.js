document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdraw = parseFloat(withdrawFieldString);

    withdrawField.value = '';

    if (isNaN(newWithdraw)){
        alert('ata bank re bokachoda number de word na ')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalElementString);

    


    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);

    if (newWithdraw > previousBalanceTotal) {
        alert('tor bape rakhse ato taka bank a? ')
        return;
    }

    const totalWithdraw = newWithdraw + newWithdrawTotal;
    withdrawTotalElement.innerText = totalWithdraw;


    const finalWithdraw = previousBalanceTotal - newWithdraw;
    balanceTotalElement.innerText = finalWithdraw;




})