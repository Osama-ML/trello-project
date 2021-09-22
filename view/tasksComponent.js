createTasksView = (columnId, tasks) => {
    let column = document.getElementById(columnId);
    let tasksDiv = column.querySelector("#tasks-container");
    let tasksList = document.createElement("ul");
    let taskHTML = document.createElement("li");

    tasksDiv.appendChild(tasksList);


    tasks.map((task) => {
        taskHTML.innerText = task.title;
        taskHTML.setAttribute("id", task.id);
    });

    tasksList.appendChild(taskHTML);

    taskHTML.addEventListener('click', () => {
        // call dialog component
    })
};
