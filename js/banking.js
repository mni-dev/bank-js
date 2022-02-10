//handle deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
     const depositInput = document.getElementById('deposit-input');
    //  console.log(deopositInput);
    const depositedAmount = depositInput.value;
    // console.log(depositedAmount);
    const depositShowHere = document.getElementById('deposit-total');
    depositShowHere.innerText = depositedAmount;
    // console.log(depositShowHere);
    //clear the input field
    depositInput.value = '';
    const prevDepositedAmount = depositShowHere.innerText;
    // console.log(prevDepositedAmount)
    const newDeposit = depositShowHere.innerText;
    const currentDeposit = prevDepositedAmount + newDeposit;
    console.log(currentDeposit)
    
})