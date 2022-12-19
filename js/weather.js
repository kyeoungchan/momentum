const API_KEY = "0978e71de443111ad072a528c5c9a854";

function onGeoOK(position) {
    // 위치를 파악하는 데 성공했다면 JavaScript는 더 많은 정보를 줄 것이다.
    // 우리는 그저 JavaScript가 주는 Object를 채울 공간만 만들어주면 되는 것이다.(position으로)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    // URL을 JavaScript가 부른다.
    // URL을 Promise한 후, JSON을 불러낸다.
    // 그 후 Data를 추출한다.
    // 그리고 Data 내에 있는 main값과 weather의 값을 추출해낸다.

}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);