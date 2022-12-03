const clock = document.querySelector("body #clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
// interval 함수를 호출하기 전, 1초간의 delay를 없애기 위해 미리 getClock() 함수를 호출한다.
setInterval(getClock, 1000);