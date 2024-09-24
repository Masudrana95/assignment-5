document.getElementById('btn-donate')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-donate').value;
    const addMoneyNumber = parseFloat (addMoney);
    const balance = document.getElementById('donAm').innerText
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    const totalBalance = document.getElementById('account-balance').innerText
    const totalBalanceNumber = totalBalance - addMoneyNumber;
    document.getElementById('account-balance').innerText = totalBalanceNumber;
    document.getElementById('donAm').innerText = newBalance;
})

document.getElementById('btn-feni-donate')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-feni-donate').value;
    const addMoneyNumber = parseFloat (addMoney);
    const balance = document.getElementById('fenidonAm').innerText
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    const totalBalance = document.getElementById('account-balance').innerText
    const totalBalanceNumber = totalBalance - addMoneyNumber;
    document.getElementById('account-balance').innerText = totalBalanceNumber;
    document.getElementById('fenidonAm').innerText = newBalance;
})


document.getElementById('btn-aid-donate')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-aid-donate').value;
    const addMoneyNumber = parseFloat (addMoney);
    const balance = document.getElementById('aiddonAm').innerText
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    const totalBalance = document.getElementById('account-balance').innerText
    const totalBalanceNumber = totalBalance - addMoneyNumber;
    document.getElementById('account-balance').innerText = totalBalanceNumber;
    document.getElementById('aiddonAm').innerText = newBalance;
    
})


