import editColumn from "../controller/editColumn";

export default editColumnTitle = (id) => {
    const currentCard = document.getElementById(id);
    const titleContainer = currentCard.querySelector("#title-container");
    const titleHTML = titleContainer.querySelector("h3");

    const editForm = document.createElement("form");
    const editInput = document.createElement("input");
    editForm.appendChild(editInput);
    titleContainer.appendChild(editForm);
    editForm.style.display = "none";

    titleHTML.addEventListener("click", () => {
        editInput.value = titleHTML.textContent;

        titleHTML.style.display = "none";
        editForm.style.display = "block";
        editInput.focus();

        editInput.onblur = () => {
            editColumn(titleHTML, editInput, editForm, id);
        };

        editForm.addEventListener("submit", (e) => {
            e.preventDefault();
            editColumn(titleHTML, editInput, editForm, id);
        });
    });
};
