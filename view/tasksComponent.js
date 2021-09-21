createTasksView = (columnId, tasks) => {
    let column = document.getElementById(columnId);
    let tasksDiv = column.querySelector("#tasks-container");
    let tasksList = document.createElement("ul");
    let taskHTML = document.createElement("li");

    let taskDialog = document.createElement('dialog')
    taskDialog.textContent = 'hi from dialog'

    tasksDiv.appendChild(tasksList);


    tasks.map((task) => {
        taskHTML.innerText = task.title;
        taskHTML.setAttribute("id", task.id);
    });

    tasksList.appendChild(taskHTML);
    tasksList.appendChild(taskDialog);

    taskHTML.addEventListener('click', () => {
        console.log('hi')
        taskDialog.showModal()
    })
    taskDialog.addEventListener('blur', () => {
        console.log('hi blur')
        taskDialog.close()

    })
};
