const createEditDeleteColumnButtons = () => {
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

    return editDeleteContainer;
};


