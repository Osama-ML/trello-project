import deleteColumn from "../controller/deleteColumn.js";

export default createDeleteColumnButton = (columnId) => {

    const currentColumn = document.getElementById(columnId)

    let deleteCardContainer = document.createElement("div");
    let deleteImg = document.createElement("img");
    
    
    deleteImg.src = "../assets/delete.svg";
    deleteImg.width = "20";
    deleteImg.height = "20";
    
    deleteCardContainer.appendChild(deleteImg);
    
    currentColumn.querySelector('#title-container').after(deleteCardContainer)
    
    deleteCardContainer.addEventListener('click', () => {
      deleteColumn(columnId)

    })

    return deleteCardContainer;
};

// edit and remove from localstorage