function getDepositFieldById (inputId){
    const depositField = document.getElementById(inputId);
    const depositFieldString = depositField.value;
    const depositAmount = parseFloat(depositFieldString);
    depositField.value = '';
    return depositAmount;
}

function getTextElementById (elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const newElement = parseFloat(elementString);
    return newElement;
}

function setTextElementValueById (elementId, newValue){
    const newText = document.getElementById(elementId);
    newText.innerText = newValue;
}
