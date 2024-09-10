const userName = document.querySelector('#name');
const login = document.querySelector('#password');
const repPassword = document.querySelector('#repeatPassword');
const btn = document.forms.myForm.sendButton;
btn.onclick = function () {
    let nameVal = userName.value;
    let loginVal = login.value;
    let repPasswordVal = repPassword.value;
    console.log(nameVal);
    console.log(loginVal);
    console.log(repPasswordVal);
    userName.value = "";
    login.value = "";
    repPassword.value = "";

    window.location.replace('../index.html');
}

//console.log(btn);