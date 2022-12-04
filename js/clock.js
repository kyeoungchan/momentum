const clock = document.querySelector("body #clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    // toString() 함수를 사용해서 String형으로 바꿔줄 수 있다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // String()으로 감싸서 바로 String형으로 변환시킬 수도 있다.
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// interval 함수를 호출하기 전, 1초간의 delay를 없애기 위해 미리 getClock() 함수를 호출한다.
setInterval(getClock, 1000);