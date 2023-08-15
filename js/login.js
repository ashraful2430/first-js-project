// step-1: add click event handler with the event listener
document.getElementById('btn-submit').addEventListener('click',function(){
   
    // step -2: get the email form the email input field 
    // always use .value to get the text form the input field 
    const emailInfo = document.getElementById('user-email');
    const email = emailInfo.value;

    // step -3 get the password form the password field
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    

    // NOTE: Do not verify client email and below method 
    // step -4 : verify email and password 
    if (email === "marebap69@asuda.com" && password === "tor nanir heda"){
        window.location.href = 'bank.html'
    }else{
        alert('Password janos na??? tui bokachoda');
    }

})