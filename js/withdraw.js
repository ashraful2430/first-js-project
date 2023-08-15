document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdraw = parseFloat(withdrawFieldString); 
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalElementString);

    const totalWithdraw = newWithdraw+newWithdrawTotal;
    withdrawTotalElement.innerText = totalWithdraw;
})