const form = document.getElementById("form");
const todoContainer = document.getElementById("todoItems");
const todoText = document.getElementById("todo");
const todoType = document.getElementById("todoType");

const todos = [];

renderList();

function renderList() {
  const listLi = todos.map(function (item) {
    return `<li> ${item.title} - ${item.type}</li>  `;
    // return "<li>" + item.title + "-" + item.type + "</li>"  ;
  });

  let alltodos = listLi.reduce(function (total, curr) {
    return total + curr;
  }, "");

  // let alltodos = listLi.reduce( (total, curr)=> total + curr, "");
  // let alltodos = `<li>New Item</li><li>New Item</li>`;
  todoContainer.innerHTML = alltodos;
}

//event listners
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(todoText.value);
  console.log(todoType.value);

  let newTodo = {
    title: todoText.value,
    type: todoType.value,
  };

  todos.push(newTodo);
  todoText.value = "";

  renderList();
});
