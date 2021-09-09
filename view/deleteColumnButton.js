const createDeleteColumnButton = (columnId) => {

    const currentColumn = document.querySelector(columnId)

    

    
    // let editCard = document.createElement("div");
    // let editImg = document.createElement("img");
    let deleteCard = document.createElement("div");
    let deleteImg = document.createElement("img");
    
    currentColumn.querySelector('#title-container').after(deleteCard)
    // editImg.src = "../assets/editar.svg";
    // editImg.width = "20";
    // editImg.height = "20";
    deleteImg.src = "../assets/delete.svg";
    deleteImg.width = "20";
    deleteImg.height = "20";

    // editCard.appendChild(editImg);
    deleteCard.appendChild(deleteImg);

    editDeleteContainer.appendChild(deleteCard)
    
    
    

    deleteCard.addEventListener('click', () => {
      const currentCard =  document.getElementById(columnId);

      currentCard.remove()
    })

    return deleteCard;
};

// refactor this component

// edit and remove from localstorage