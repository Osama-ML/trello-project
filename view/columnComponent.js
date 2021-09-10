const createNewColumnView = (id, title) => {
    let columnHTML = document.createElement("div");
    columnHTML.className = "card";
    columnHTML.setAttribute("id", id);
    
    let headerCard = document.createElement('div');
    headerCard.className = "card-header"
    
    let titleContainer = document.createElement('div')
    titleContainer.setAttribute('id', 'title-container')
    let titleHTML = document.createElement('h3')
    titleHTML.textContent = title;
    titleContainer.appendChild(titleHTML)

    let line = document.createElement('hr');
    
    headerCard.appendChild(titleContainer);
    columnHTML.appendChild(headerCard);
    
    columnHTML.appendChild(line);
    columnsContainer.appendChild(columnHTML);
    
    createDeleteColumnButton(id);
    
    editColumnTitle(id)
    
    addTaskButton(id);
};