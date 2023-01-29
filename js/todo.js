const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// localstorage 는 string (text) 만 저장가능하고 array는 저장되지 않는다.
// javascript 의 array 등의 것을 string 으로 저장해주는 기능 JSON.stringify(변수명)
//JSON.sstringify([1,2,3,4])  --> "[1,2,3,4]"
//JSON.parse("[1,2,3,4]")  --> [1,2,3,4]   string을 javascript가 이해할 수 있는 live 한 array로 만들어준다.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //"todos"는 마구 지은 key 값이다.
}

function deleteToDo(event) {
  const liDelete = event.target.parentElement;
  liDelete.remove();
  toDos = toDos.filter((toDoList) => toDoList.id !== parseInt(liDelete.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const liMade = document.createElement("li");
  liMade.id = newTodo.id;
  const spanMade = document.createElement("span");
  spanMade.innerText = newTodo.text;
  const buttonMade = document.createElement("button");
  buttonMade.innerText = "👍";
  buttonMade.addEventListener("click", deleteToDo);
  liMade.appendChild(spanMade); //append 는 제일 뒤에 붙인다.
  liMade.appendChild(buttonMade);
  toDoList.appendChild(liMade);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //pushing object instead of just text
  const newTodoObject = {
    text: newTodo,
    id: Date.now(), //밀리세컨드의 지금시간으로 랜덤부여에 좋다.
  }; //key todos, value [{"text":"a","id":1674871438977},{"text":"b","id":1674871439759}]
  toDos.push(newTodoObject); //toDos array 만들기
  paintToDo(newTodoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//function sayHello(item){   console.log("this is the turn of", item);}
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos.forEach((item) => console.log("this is the turn of", item)); //array의 각 아이템을 실행할수 있게 한다.
  toDos = parsedToDos; //리프레쉬할때 기존의 것 사라지는 것 방지, let 으로 array 및 이 라인으로 기존것 가져오기.
  parsedToDos.forEach(paintToDo);
}
//forEach
//filter 삭제라기 보다 excluding 임 exclude 할 item 의 array를 만들어 제외

// function sexyFilter(number){
// //return true if you want to keep the array
// return !==3 ;
// }
// [1,2,3,4].filter(sexyFilter)
//[1,2,4]
// const newArr = arr.filter(item => item>2)
