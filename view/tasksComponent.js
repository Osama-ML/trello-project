createTasksView = (columnId, tasks) => {
    const syte = document.querySelector('.container')
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
        const dialog = taskEditDialog()
        syte.appendChild(dialog)
    })

    
};
