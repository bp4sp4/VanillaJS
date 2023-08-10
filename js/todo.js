const toDoForm = document.getElementById("todo-form"); // id가 todo-form인 form 태그
const toDoInput = document.querySelector("#todo-form input");  // id가 todo-form에 속한 input 태그
const toDoList = document.getElementById("todo-list"); // id가 todo-list 인 ul 태그

const toDos = [];


function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

// 버튼 눌러서 삭제함수
function deleteToDo(event) {
    const li = event.target.parentElement; // 이벤트타겟의 부모객체를 찾음
    li.remove(); // 생성된 todolist li태그를 삭제함
}


// toDO를 그리는 함수
function paintToDo(newTodo){
    const li = document.createElement("li"); // li태그 생성
    const span = document.createElement("span"); // span태그 생성
    span.innerText = newTodo; // span에 newTodo 값 노출
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li에 span태그 생성
    li.appendChild(button);
    toDoList.appendChild(li); // todolist에 li태그 추가
}

// 인풋을 입력했을때 작동하는 함수
function handleToDoSubmit(event) {
    event.preventDefault(); // 입력했을때 새로고침 방지
    const newTodo = toDoInput.value; // input에서 얻은 값을
    toDoInput.value = ""; // 입력했을때 빈값을 노출
    toDos.push(newTodo);
    paintToDo(newTodo) // paintodo에 보낸다
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
