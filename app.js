let columns = document.querySelector('#columns');

let createNewList = () => {
    let input = document.getElementById("add-new-list");

    let list = new Column(input.value);
    let listHTML = document.createElement("div");
    listHTML.className = "card";
    listHTML.setAttribute("id", list.id);
    listHTML.textContent = list.title;
    columns.appendChild(listHTML);
    input.value = "";
    console.log(input.value);
};

// Creating a column of tasks

// Creating tasks

// let task1 = new Task("task1");
// let task2 = new Task("task2");
// let task3 = new Task("task3");

// column1.addTask(task1);
// column1.addTask(task2);
// column1.addTask(task3);

// let tasksHTML = document.createElement("ul");
// columnHTML.appendChild(tasksHTML);

// column1.tasks.map((task) => {
//   let newTask = document.createElement("li");
//   newTask.textContent = task.title;
//   tasksHTML.appendChild(newTask);
// });

// Crear una nueva lista

let addNewColumn = document.createElement("div");
addNewColumn.classList = "create-new-column";

document.querySelector("#columns").after(addNewColumn);



let newColumnForm = document.createElement("form");
newColumnForm.setAttribute("id", "add-new-list-form");
addNewColumn.appendChild(newColumnForm);

let newColumnInput = document.createElement("input");
newColumnInput.setAttribute('autocomplete', 'off')

newColumnForm.appendChild(newColumnInput);

newColumnInput.setAttribute("id", "add-new-list");
document.getElementById("add-new-list").placeholder = "+ Añada una lista";

newColumnForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewList();
});
