const btn = document.getElementById("newTodo");
const text = document.getElementById("todo");
const select = document.getElementById("todoType");
const todoItems = document.getElementById("todoItems");
const form = document.getElementById("form");
const todos = JSON.parse(localStorage.getItem("todos")) || [];

//load todos
loadItems();

function loadItems() {
  if (todos.length == 0) return;
  const todoLi = todos.map(
    (item) => "<li>" + item.title + item.Todotype + "</li>"
  );
  todoItems.innerHTML = todoLi.reduce((html, li) => (html += li));
}

function addNewItem() {
  console.log(select.value);

  let newTodo = {
    title: text.value,
    Todotype: select.value,
  };
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  loadItems();
  text.value = "";
  text.focus();
}

btn.addEventListener("click", function () {
  addNewItem();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addNewItem();
});
