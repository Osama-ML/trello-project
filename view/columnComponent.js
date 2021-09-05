const createNewColumnView = (id, title) => {
    let headerCard = document.createElement('div');
    headerCard.className = "card-header"
    
    let columnHTML = document.createElement("div");
    columnHTML.className = "card";
    columnHTML.setAttribute("id", id);

    

    let titleHTML = document.createElement('h3')
    titleHTML.textContent = title;

    let editDeleteContainer = document.createElement('div');
    editDeleteContainer.className = 'edit-delete-card-container'

    let editCard = document.createElement('div');
    let deleteCard = document.createElement('div');
    let editImg = document.createElement('img')
    let deleteImg = document.createElement('img')

    editImg.src = '../assets/editar.svg'
    editImg.width = '20'
    editImg.height = '20'
    deleteImg.src = '../assets/delete.svg'
    deleteImg.width = '20'
    deleteImg.height = '20'



    editCard.appendChild(editImg);
    deleteCard.appendChild(deleteImg)

    let line = document.createElement('hr');

    columnHTML.appendChild(headerCard);
    headerCard.appendChild(titleHTML);
    headerCard.appendChild(editDeleteContainer)
    editDeleteContainer.appendChild(editCard);
    editDeleteContainer.appendChild(deleteCard)
    columnHTML.appendChild(line);
    columnsContainer.appendChild(columnHTML);

    addTaskButton(id);

};