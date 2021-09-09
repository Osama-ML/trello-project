const editColumnTitle = (id) => {
    const currentCard = document.getElementById(id);
    const titleContainer = currentCard.querySelector('#title-container')
    const titleHTML = titleContainer.querySelector('h3')
    
    titleHTML.addEventListener("click", () => {
          console.log(currentCard)

      //   const titleBlured = document.createElement("h3");

        const editForm = document.createElement("form");
        const editInput = document.createElement("input");
        editInput.value = titleHTML.textContent;

        editForm.appendChild(editInput);

        titleHTML.style.display = 'none';
        titleContainer.appendChild(editForm);
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
