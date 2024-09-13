const login = document.querySelector('#name');
const password = document.querySelector('#password');
const btn = document.forms.myForm.sendButton;
btn.onclick = function () {
    const loginVal = login.value;
    const passwordVal = password.value;
    const DBUser = localStorage.getItem(loginVal);
    
    if (DBUser === null) {
        alert("Пользователя с таким логином не существует!");
    }
    else {
        const user = JSON.parse(DBUser);
        if (passwordVal == user.password) {
            alert("Вы вошли!");
            sessionStorage.setItem("user", DBUser);
            window.location.replace('../html/workPage.html');
        }
        else {
            alert("Неверный пароль!");
        }
    }

    login.value = "";
    password.value = "";
}