//handle deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
     const depositInput = document.getElementById('deposit-input');

     //Update Deposit Total
    const depositedAmount = depositInput.value;
    // console.log(depositedAmount);
    const depositShowHere = document.getElementById('deposit-total');
    //clear the input field
    depositInput.value = '';
    const prevDepositedAmount = depositShowHere.innerText;
    // console.log(prevDepositedAmount)
    const newDeposit = parseFloat(prevDepositedAmount) + parseFloat(depositedAmount);
    console.log(newDeposit);
    const currentDeposit = parseFloat(newDeposit);
    depositShowHere.innerText = currentDeposit;
    // console.log(depositShowHere)

    //Update Account Balance
    const balance = document.getElementById('balance');
    const prevBalance = balance.innerText;
    const newBalance = parseFloat(prevBalance) + parseFloat(depositedAmount); //parseFloat(newDeposit);
    balance.innerText = newBalance;
    
})