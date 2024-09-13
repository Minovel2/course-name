const login = document.querySelector('#name');
const password = document.querySelector('#password');
const repPassword = document.querySelector('#repeatPassword');
const btn = document.forms.myForm.sendButton;
localStorage.clear();
export let user;
btn.onclick = function () {
    const loginVal = login.value;
    const passwordVal = password.value;
    const repPasswordVal = repPassword.value;
    const DBUser = localStorage.getItem(loginVal);
    
    if (DBUser === null) {
        if (passwordVal == repPasswordVal) {
            user = JSON.stringify({
                password: passwordVal,
                role: 0
            });
            localStorage.setItem(loginVal, user);
            alert("Вы зарегестрировались!");
            window.location.replace('../html/workPage.html');
        }
        else {
            alert("Пароли должны совпадать!");
        }
    }
    else {
        alert("Пользователь с таким логином уже существует!");
    }

    login.value = "";
    password.value = "";
    repPassword.value = "";

}