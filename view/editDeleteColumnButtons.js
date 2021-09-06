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
      const currentCard =  document.getElementById(columnId);
      const titleHTML = currentCard.childNodes[0].querySelector('h3')
      const editInput = document.createElement('input');
      editInput.value = titleHTML.textContent

      titleHTML.parentNode.replaceChild(editInput, titleHTML);
      editInput.focus();


    })

    deleteCard.addEventListener('click', () => {
          console.log('delete this card')
    })

    return editDeleteContainer;
};


