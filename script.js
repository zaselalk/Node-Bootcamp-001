const form = document.getElementById("form");
const updateForm = document.getElementById("update-form");
const todoContainer = document.getElementById("todoItems");
const todoText = document.getElementById("todoText");
const todoType = document.getElementById("todoType");
const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const updateInput = document.getElementById("update-input");

let todos = JSON.parse(localStorage.getItem("tods")) || [];

let updateItemId;

renderList();
function deleteitem(id) {
  todos = todos.filter((item) => item.id != id);
  saveOnLocalStorage();
  renderList();
}

function updateitem(id) {
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");

  let updateItem = todos.find((item) => (item.id = id));
  updateInput.value = updateItem.title;

  updateItemId = id;
}

function renderList() {
  const listLi = todos.map(function (item) {
    return `<li> ${item.title} - ${item.type} <button onClick="deleteitem(${item.id})">Delete</button> <button onClick="updateitem(${item.id})">Update</button></li> `;
  });

  let alltodos = listLi.reduce(function (total, curr) {
    return total + curr;
  }, "");

  todoContainer.innerHTML = alltodos;
}

function saveOnLocalStorage() {
  localStorage.setItem("tods", JSON.stringify(todos));
}

backdrop.addEventListener("click", hideModal);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let newTodo = {
    id: todos.length + 1,
    title: todoText.value,
    type: todoType.value,
  };

  todos.push(newTodo);
  todoText.value = "";

  saveOnLocalStorage();
  renderList();
});

updateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  todos = todos.map((item) => {
    if (item.id == updateItemId) {
      item.title = updateInput.value;
    }

    return item;
  });

  updateInput.value = "";

  saveOnLocalStorage();
  renderList();

  hideModal();
});

function hideModal() {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
}
