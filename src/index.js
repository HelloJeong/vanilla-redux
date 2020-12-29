import { createStore } from "redux";

const in_todo = document.getElementById("in_todo");
const btn_add = document.getElementById("btn_add");
const ul = document.getElementById("todo_list");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => ({
  type: ADD_TODO,
  text,
});

const deleteToDo = (id) => ({
  type: DELETE_TODO,
  id,
});

const reducer = (todos = [], action) => {
  console.log(todos, action);
  switch (action.type) {
    case ADD_TODO:
      return [...todos, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
};

const store = createStore(reducer);

const dispatchDeleteToDo = (id) => {
  store.dispatch(deleteToDo(id));
};

const onDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  dispatchDeleteToDo(id);
};

const onChange = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach((v) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "DEL";
    button.type = "button";
    button.addEventListener("click", onDeleteTodo);
    li.id = v.id;
    li.innerText = v.text;
    li.appendChild(button);
    ul.append(li);
  });
};

store.subscribe(onChange);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

btn_add.addEventListener("click", () => {
  dispatchAddToDo(in_todo.value);
  in_todo.value = "";
});
