const createNewColumnView = (id, title) => {
    let columnHTML = document.createElement("div");
    columnHTML.className = "card";
    columnHTML.setAttribute("id", id);
    let titleHTML = document.createElement('h3')
    titleHTML.textContent = title;
    let line = document.createElement('hr');
    columnHTML.appendChild(titleHTML)
    columnHTML.appendChild(line)
    columnsContainer.appendChild(columnHTML);

    addTaskButton(id);

};