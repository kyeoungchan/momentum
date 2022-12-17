const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
// String 형이 2번 이상 나오면 변수로 저장해서 활용해두는 것이 좋다.

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // target은 HTML Element로 접근하는 것으로 보면 된다.
    li.remove();
}

function paintToDo(newTodo) {
    // 입력받은 ToDo들을 Painting해주는 함수다.
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    // <li> Tag 내에 <span> Tag를 넣어준다.
    li.appendChild(button);
    // <span> Tag 다음으로 <button> Tag를 붙여준다.
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // submit event를 실행시켰을 때 자동 새로고침을 방지해준다.
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    // To Do List를 Paint하기 전에 배열에 먼저 저장을 한다.
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    // To Do 목록이 비어있지 않다면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // 이미 저장된 List를 toDos에 넣어준다.
    parsedToDos.forEach(paintToDo);
    // 해당 배열의 원소들마다 각각 인자로 전달한 함수를 시켜준다.
}