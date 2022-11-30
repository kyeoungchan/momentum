const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting ");

const HIDDEN_CLASSNAME = "hidden";
// "hidden"이라는 Class Name을 두 번 이상 사용할 때는 변수로 저장해두고 사용하는 것이 좋다.
const USERNAME_KEY = "username";
// "user"라는 Key를 두 번 이상 사용할 때는 변수로 저장해두고 사용하는 것이 좋다.

function onLoginSubmit(event) {
    event.preventDefault();
    // Browser가 event 발생할 때마다 기본적으로 하는 행위를 막아준다.
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // 입력 받은 username을 Local Storage에 저장한다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // loginForm에 hidden ClassName을 추가해준다.
    paintGreetings();
}

function paintGreetings() {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hi Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    // show the login form   
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    // submit Event는 Enter를 누르거나 Button을 클릭할 때 발생한다.
} else {
    // show the greetings
    paintGreetings();
}