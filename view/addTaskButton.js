import createNewTask from "../controller/createNewTask.js";
import createTasksView from "./tasksComponent.js";

export default addTaskButton = (columnId) => {
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

        let tasks = createNewTask(addTaskInput, columnId);

        createTasksView(columnId, tasks);

        addTaskInput.value = "";
    });
};
