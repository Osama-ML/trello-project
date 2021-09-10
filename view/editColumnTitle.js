const editColumnTitle = (id) => {
    const currentCard = document.getElementById(id);
    const titleContainer = currentCard.querySelector('#title-container')
    const titleHTML = titleContainer.querySelector('h3')
    
    const editForm = document.createElement("form");
    const editInput = document.createElement("input");
    editForm.appendChild(editInput);
    titleContainer.appendChild(editForm);
    editForm.style.display = 'none'

    titleHTML.addEventListener("click", () => {
        editInput.value = titleHTML.textContent;

        titleHTML.style.display = 'none';
        editForm.style.display = 'block';
        editInput.focus();

        editInput.onblur = () => {
            titleHTML.textContent = editInput.value;
            titleHTML.style.display = 'block'

            editForm.style.display = 'none';
        };

        editForm.addEventListener("submit", (e) => {
            e.preventDefault();
            titleHTML.textContent = editInput.value;
            titleHTML.style.display = 'block'

            editForm.style.display = 'none';
        });
    });
};
