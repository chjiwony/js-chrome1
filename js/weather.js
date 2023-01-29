const API_KEY = "cb35aa19e9c29d39e91dfb809dff9d4b";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const area = document.querySelector("#weather span:last-child");
      area.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError); //성공시, 에러시
//혹시 Live Server를 이용하시면 host설정을 개인ip를 입력하셨을 겁니다.
// 접속 URL 예 ) 192.168.0.1:5050/index.html
// 이러면 Geolocation API 개인정보보안떄문에 작동하지 않고 warning이 뜹니다.
// Geolocation API는 https (기본), localhost(예외) 에서만 작동합니다.
// localhost:port/index.html로 접속하시면 정상 작동합니다.
