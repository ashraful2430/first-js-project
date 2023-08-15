document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdraw = parseFloat(withdrawFieldString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalElementString);

    const totalWithdraw = newWithdraw + newWithdrawTotal;
    withdrawTotalElement.innerText = totalWithdraw;

    const balanceTotalElement=document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);

    const finalWithdraw = previousBalanceTotal-newWithdraw;
    balanceTotalElement.innerText= finalWithdraw;



    withdrawField.value = '';
})