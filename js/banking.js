//handle deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
     const depositInput = document.getElementById('deposit-input');
     //Update Deposit Total
    const depositedAmount = depositInput.value;
    const depositShowHere = document.getElementById('deposit-total');
    //clear the input field
    depositInput.value = '';
    const prevDepositedAmount = depositShowHere.innerText;
    const newDeposit = parseFloat(prevDepositedAmount) + parseFloat(depositedAmount);
    const currentDeposit = parseFloat(newDeposit);
    depositShowHere.innerText = currentDeposit;
    

    //Update Account Balance
    const balance = document.getElementById('balance');
    const prevBalance = balance.innerText;
    const newBalance = parseFloat(prevBalance) + parseFloat(depositedAmount); //parseFloat(newDeposit);
    balance.innerText = newBalance;  
})
//update Withdraw and Balance 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //Update Withdraw Amount
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawField.value;
    const withdrawShowHere = document.getElementById('withdraw-amount');
    const withdrawSize = withdrawShowHere.innerText;
    withdrawField.value = '';
    const withdrawAmassed = parseFloat(withdrawSize) + parseFloat(withdrawAmount);
    const withdrawNew = parseFloat(withdrawAmassed);
    withdrawShowHere.innerText = parseFloat(withdrawNew);

    //Update Balance
    const balanceField = document.getElementById('balance');
    const prevBalance = balanceField.innerText;
    const newBalance = prevBalance - withdrawAmount;
    balanceField.innerText = newBalance;
})