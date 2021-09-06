const createNewColumnView = (id, title) => {
    let columnHTML = document.createElement("div");
    columnHTML.className = "card";
    columnHTML.setAttribute("id", id);
    
    let headerCard = document.createElement('div');
    headerCard.className = "card-header"
    

    let titleHTML = document.createElement('h3')
    titleHTML.textContent = title;

    const editDeleteContainer = createEditDeleteColumnButtons(id);

    let line = document.createElement('hr');

    columnHTML.appendChild(headerCard);
    headerCard.appendChild(titleHTML);
    headerCard.appendChild(editDeleteContainer)
    
    columnHTML.appendChild(line);
    columnsContainer.appendChild(columnHTML);

    addTaskButton(id);

};