const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo) {
    // 입력받은 ToDo들을 Painting해주는 함수다.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span);
    // <li> Tag 내에 <span> Tag를 넣어준다.
    li.appendChild(button);
    // <span> Tag 다음으로 <button> Tag를 붙여준다.
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // submit event를 실행시켰을 때 자동 새로고침을 방지해준다.
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);