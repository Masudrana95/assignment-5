document.getElementById('btn-donate')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputeFieldValueById ('input-donate');
    const balance = getTextFieldValueById ('donAm');
    const addMoneyNumber = getTextFieldValueById ('account-balance');
    const newBalance = addMoney + balance;
    const totalBalance = addMoneyNumber - addMoney;
    document.getElementById('account-balance').innerText = totalBalance;
    document.getElementById('donAm').innerText = newBalance;
    
})

document.getElementById('btn-feni-donate')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputeFieldValueById ('input-feni-donate');
    const balance = getTextFieldValueById ('fenidonAm');
    const addMoneyNumber = getTextFieldValueById ('account-balance');
    const newBalance = addMoney + balance;
    const totalBalance = addMoneyNumber - addMoney;
    document.getElementById('account-balance').innerText = totalBalance;
    document.getElementById('fenidonAm').innerText = newBalance;
    
})

document.getElementById('btn-aid-donate')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputeFieldValueById ('input-aid-donate');
    const balance = getTextFieldValueById ('aiddonAm');
    const addMoneyNumber = getTextFieldValueById ('account-balance');
    const newBalance = addMoney + balance;
    const totalBalance = addMoneyNumber - addMoney;
    document.getElementById('account-balance').innerText = totalBalance;
    document.getElementById('aiddonAm').innerText = newBalance;
    
})
