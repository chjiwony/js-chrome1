const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

// setTimeout(sayHello, 5000);//일정 시간 후 실행 한번
// setInterval(sayHello, 5000);일정 시간 마다 반복 실행
// console 에서 new Date() 하면 현재 시간 나온다
// date.getDay() date.getDate() date.getFullYear() date.getHours()
//"1".padStart(2,"0") 2글자가 아니라면 0으로 시작
//padEnd(,)
