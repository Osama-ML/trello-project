import createNewColumn from "../controller/createNewColumn";

let addNewColumn = document.createElement("div");
addNewColumn.classList = "create-new-column";


document.querySelector("#columns-container").after(addNewColumn);


let newColumnForm = document.createElement("form");
newColumnForm.setAttribute("id", "add-new-column-form");
addNewColumn.appendChild(newColumnForm);

let newColumnInput = document.createElement("input");
newColumnInput.setAttribute('autocomplete', 'off')

newColumnForm.appendChild(newColumnInput);

newColumnInput.setAttribute("id", "add-new-column");
document.getElementById("add-new-column").placeholder = "+ Añada una lista";

newColumnForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewColumn();
});