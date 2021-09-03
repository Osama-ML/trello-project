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

    
    columnHTML.appendChild(addTaskAndTasksContainer)

    let columnRef = columnHTML.childNodes[1]
    
    columnRef.querySelector("#tasks-container").after(addTaskContainer)
    
    columnRef.querySelector('#add-task-input').placeholder = "+ Añada una tarjeta"

    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let task = new Task(addTaskInput.value)
        let actualStorage = Object.values(myStore.store).map(element => JSON.parse(element))
        let currentColumn = actualStorage.find(element => element.id === id)

        let columnInstance = new Column(currentColumn.title, currentColumn.id, currentColumn.tasks)
        columnInstance.addTask(task)
        console.log( columnInstance)
        addTaskInput.value = '';
        myStore.addListToStorage(columnInstance)
    })

};

// let tasksHTML = document.createElement("ul");
// columnHTML.appendChild(tasksHTML);

// column.tasks.map((task) => {
//     let newTask = document.createElement("li");
//     newTask.textContent = task.title;
//     tasksHTML.appendChild(newTask);
// });