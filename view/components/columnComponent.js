const createNewColumnView = (id, title) => {
    let columnHTML = document.createElement("div");
    columnHTML.className = "card";
    columnHTML.setAttribute("id", id);
    columnHTML.textContent = title;
    columnsContainer.appendChild(columnHTML);

    let addTaskAndTasksContainer = document.createElement("div")
    addTaskAndTasksContainer.classList = 'add-task-and-tasks-container'

    let addTaskContainer = document.createElement("div")
    let addTaskForm = document.createElement("form")
    let addTaskInput = document.createElement("input")
    
    addTaskInput.setAttribute('autocomplete', 'off')
    addTaskInput.setAttribute("id", "add-task-input")
    
    
    addTaskContainer.appendChild(addTaskForm);
    addTaskForm.appendChild(addTaskInput);
    
    
    let tasksContainer = document.createElement("div")
    tasksContainer.setAttribute("id", "tasks-container")
    addTaskAndTasksContainer.appendChild(addTaskContainer)
    addTaskAndTasksContainer.appendChild(tasksContainer)
    
    document.getElementById(id).appendChild(addTaskAndTasksContainer);
    
    document.getElementById("tasks-container").after(addTaskContainer)
    
    document.getElementById('add-task-input').placeholder = "+ Añada una tarjeta"

};

// let tasksHTML = document.createElement("ul");
// columnHTML.appendChild(tasksHTML);

// column.tasks.map((task) => {
//     let newTask = document.createElement("li");
//     newTask.textContent = task.title;
//     tasksHTML.appendChild(newTask);
// });