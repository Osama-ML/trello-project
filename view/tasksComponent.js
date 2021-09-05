createTasksView = (columnId, tasks) => {
    let column = document.getElementById(columnId);
    let tasksDiv = column.querySelector("#tasks-container");
    let tasksList = document.createElement("ul");
    let taskHTML = document.createElement("li");

    let editDeleteTaskContainer = document.createElement('div')
    let editTask = document.createElement("div");
    let deleteTask = document.createElement("div");
    let editTaskImg = document.createElement("img");
    let deleteTaskImg = document.createElement("img");

    editTaskImg.src = "../assets/editar.svg";
    editTaskImg.width = "15";
    editTaskImg.height = "15";
    deleteTaskImg.src = "../assets/delete.svg";
    deleteTaskImg.width = "15";
    deleteTaskImg.height = "15";

    editDeleteTaskContainer.appendChild(editTask);
    editDeleteTaskContainer.appendChild(deleteTask);
    editTask.appendChild(editTaskImg);
    deleteTask.appendChild(deleteTaskImg);

    tasksDiv.appendChild(tasksList);

    tasks.map((task) => {
        taskHTML.innerText = task.title;
        taskHTML.setAttribute("id", task.id);
        taskHTML.appendChild(editDeleteTaskContainer);
    });

    tasksList.appendChild(taskHTML);
};
