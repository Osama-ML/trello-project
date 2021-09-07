const createEditDeleteColumnButtons = (columnId) => {
    let editDeleteContainer = document.createElement("div");
    editDeleteContainer.className = "edit-delete-card-container";

    let editCard = document.createElement("div");
    let deleteCard = document.createElement("div");
    let editImg = document.createElement("img");
    let deleteImg = document.createElement("img");

    editImg.src = "../assets/editar.svg";
    editImg.width = "20";
    editImg.height = "20";
    deleteImg.src = "../assets/delete.svg";
    deleteImg.width = "20";
    deleteImg.height = "20";

    editCard.appendChild(editImg);
    deleteCard.appendChild(deleteImg);

    editDeleteContainer.appendChild(editCard);
    editDeleteContainer.appendChild(deleteCard)
    
    
    editCard.addEventListener('click', () => {
      const titleBlured = document.createElement('h3');
      const currentCard =  document.getElementById(columnId);
      
      const titleContainer = currentCard.childNodes[0].querySelector('#title-container')
      const titleHTML = titleContainer.children[0]
      const editForm = document.createElement('form');
      const editInput = document.createElement('input');
      editInput.value = titleHTML.textContent

      editForm.appendChild(editInput)


      titleHTML.remove();
      titleContainer.appendChild(editForm)
      editInput.focus();

      editInput.onblur = () => {
        titleBlured.textContent = editInput.value;

        editForm.remove();
        titleContainer.appendChild(titleBlured)
      }

      editForm.addEventListener('submit', () =>{
        titleBlured.textContent = editInput.value;
        titleContainer.appendChild(titleBlured)
        editForm.remove();
      })


    })

    deleteCard.addEventListener('click', () => {
      const currentCard =  document.getElementById(columnId);

      currentCard.remove()
    })

    return editDeleteContainer;
};


// edit and remove from localstorage