
// function getInputeFieldValueById(){
//     // console.log('this is a function file');
//     const addMoney = document.getElementById('input-donate').value;
//     return addMoney;

// }

function getInputeFieldValueById(id){
    // console.log('this is a function file');
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat (addMoney);
    return addMoneyNumber;

}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

}

function showSectionById(id){
    document.getElementById('box-section-show').classList.add('hidden');
    // document.getElementById('show-transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}