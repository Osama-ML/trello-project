const addTaskButton = (columnId) => {
    const currentColumn = document.getElementById(columnId);

    let addTaskAndTasksContainer = document.createElement("div");
    addTaskAndTasksContainer.classList = "add-task-and-tasks-container";

    let addTaskContainer = document.createElement("div");
    let addTaskForm = document.createElement("form");
    let addTaskInput = document.createElement("input");

    addTaskInput.setAttribute("autocomplete", "off");
    addTaskInput.setAttribute("id", "add-task-input");

    addTaskContainer.appendChild(addTaskForm);
    addTaskForm.appendChild(addTaskInput);

    let tasksContainer = document.createElement("div");
    tasksContainer.setAttribute("id", "tasks-container");
    addTaskAndTasksContainer.appendChild(addTaskContainer);
    addTaskAndTasksContainer.appendChild(tasksContainer);

    currentColumn.appendChild(addTaskAndTasksContainer);

    currentColumn.querySelector("#tasks-container").after(addTaskContainer);

    currentColumn.querySelector("#add-task-input").placeholder =
        "+ Añada una tarjeta";

    addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let task = new Task(addTaskInput.value);
        let actualStorage = Object.values(myStore.store).map((element) =>
            JSON.parse(element)
        );
        let currentColumn = actualStorage.find((element) => element.id === columnId);


        let columnInstance = new Column(
            currentColumn.title,
            currentColumn.id,
            currentColumn.tasks
        )

        columnInstance.addTask(task);
        
        createTasksView(columnId,columnInstance.tasks);

        addTaskInput.value = "";
        myStore.addListToStorage(columnInstance);
    });
};
