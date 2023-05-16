import { toDoList } from "./src/js/templates";
import * as toast from "./src/js/toast";

const input = document.querySelector("#input");
const createBtn = document.querySelector("#create");
const editBtn = document.querySelector("#edit");
const todosWrapper = document.querySelector("#todos-wrapper");

let taskToEdit = null;

const api =
  "https://mega-to-do-app-6b08e-default-rtdb.asia-southeast1.firebasedatabase.app/todos";

// EVENTS
createBtn.addEventListener("click", createToDo);
window.addEventListener("load", fetchTodos);
todosWrapper.addEventListener("click", completeTask);
todosWrapper.addEventListener("click", deleteTask);
todosWrapper.addEventListener("click", prepareToEdit);
editBtn.addEventListener("click", editTask);

// FUNCTIONS
async function createToDo() {
  const value = input.value.trim();
  if (!value) return;

  const res = await fetch(`${api}.json`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      task: value,
      done: false,
    }),
  });
  const data = await res.json();
  input.value = "";
  fetchTodos();
}

// -> get
async function fetchTodos() {
  const res = await fetch(`${api}.json`);
  const data = await res.json();
  todosWrapper.innerHTML = "";
  for (let key in data) {
    todosWrapper.innerHTML += toDoList(data[key], key);
  }
}

// put
async function completeTask(e) {
  const todoItem = e.target.parentElement.parentElement;
  if (!e.target.classList.contains("fa-check-circle")) return;

  const completeStatus = JSON.parse(todoItem.getAttribute("done"));

  const res = await fetch(`${api}/${todoItem.id}.json`, {
    method: "PATCH",
    body: JSON.stringify({ done: !completeStatus }),
  });
  fetchTodos();
  toast.success("Successefully changed!");
}

async function prepareToEdit(e) {
  const target = e.target;
  const listElement = target.parentElement.parentElement;
  if (!target.classList.contains("edit")) return;
  const textToEdit = listElement.querySelector(".todo-text").innerText;
  taskToEdit = listElement.id;

  input.value = textToEdit;
  if (taskToEdit) {
    const liEditBtn = listElement.querySelector(".edit");
    const liDeleteBtn = listElement.querySelector(".delete");
    const liCancelBtn = listElement.querySelector(".cancel");

    liEditBtn.classList.add("hidden");
    liDeleteBtn.classList.add("hidden");
    liCancelBtn.classList.remove("hidden");

    editBtn.classList.remove("hidden");
    editBtn.classList.add("flex");
    createBtn.classList.add("hidden");
    createBtn.classList.remove("flex");

    editBtn.addEventListener("click", () => {
      createBtn.classList.remove("hidden");
      createBtn.classList.add("flex");
      editBtn.classList.add("hidden");
      editBtn.classList.remove("flex");
    });
    liCancelBtn.addEventListener("click", () => {
      liEditBtn.classList.remove("hidden");
      liDeleteBtn.classList.remove("hidden");
      liCancelBtn.classList.add("hidden");
      input.value = "";
			createBtn.classList.remove("hidden");
      createBtn.classList.add("flex");
      editBtn.classList.add("hidden");
      editBtn.classList.remove("flex");
    });
  }
}

async function editTask() {
  const res = await fetch(`${api}/${taskToEdit}.json`, {
    method: "PATCH",
    body: JSON.stringify({ task: input.value }),
  });
  fetchTodos();
  input.value = "";
  toast.success("Task edited!");
}

// delete

async function deleteTask(e) {
  const target = e.target;
  const listElement = target.parentElement.parentElement;
  if (!target.classList.contains("delete")) return;
  const res = await fetch(`${api}/${listElement.id}.json`, {
    method: "DELETE",
  });
  fetchTodos();
  toast.success("Task was deleted!");
}
