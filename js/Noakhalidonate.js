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

    const p = document.createElement('p');
    p.innerText = `Donate ${addMoney} tk for Flood at Noakhali Bangladesh`;
    
    console.log(p);

    document.getElementById('show-transaction1').appendChild(p);

    alert("Successfully Donate");
    
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

    const p = document.createElement('p');
    p.innerText = `Donate ${addMoney} tk for Flood at Fani Bangladesh`;
    
    console.log(p);

    document.getElementById('show-transaction2').appendChild(p);

    alert("Successfully Donate");
    
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

    const p = document.createElement('p');
    p.innerText = `Donate ${addMoney} tk for Flood at aid Bangladesh`;
    
    console.log(p);

    document.getElementById('show-transaction3').appendChild(p);
    
    alert("Successfully Donate");
})

document.getElementById('show-Donate')
.addEventListener('click', function(){
    showSectionById('box-section-show');
});

document.getElementById('show-transaction-history')
.addEventListener('click', function(){
    showSectionById('transaction');
});

