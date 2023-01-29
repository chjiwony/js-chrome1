// const loginForm = document.getElementById("login-form");
//querySelector 에서는 id/class는 #id명 .class명 이렇게 명확히 써야 하지만, getElementById는 이름만 쓰면 된다.
//const loginInput = loginForm.querySelector("input");
// const loginInput = loginForm.querySelector("#login-form input");

const loginForm = document.querySelector("#login-form"); //login-form 을 저장해야 하므로 이 자체가 필요
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 디폴트가 리프레쉬인데 이런 기본 기능을 끔
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username); //localStorage  브라우저에 저장 .setItem (저장) .getItem (불러오기) .romoveItem (삭제)
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
  //   const username = loginInput.value;
  //   //   if (username === "") {
  //   //     alert("Please write your name.");
  //   //   } else if(username.length >15){
  //   //     alert("Your name is too long");
  //   //   }
  //   console.log(username);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   alert("clicked");
// }

// link.addEventListener("click", handleLinkClick);
// loginButton.addEventListener("click", onLoginBtnClick); html form input 속성으로 더 정확하게
// function paintGreetings() {
//   const username = localStorage.getItem(USERNAME_KEY);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);  이렇게 하면 paintGreetings 를 아무것도 호출안하고 쓸수 있는데,
// } 외부 값을 두번 호출하는 문제
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY); //로컬 스토리지에 유저가 있는지 확인 후 있으면 유저네임표시 없으면 새로 폼작성

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //show me the form
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
