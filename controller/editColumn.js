export const editColumn = (titleHTML, editInput, editForm, id) => {
    let myStore = window.localStorage;

    titleHTML.textContent = editInput.value;
    titleHTML.style.display = "block";

    editForm.style.display = "none";

    const storeParsed = Object.values(myStore).map((element) =>
        JSON.parse(element)
    );

    const columnToChange = storeParsed.find((element) => element.id === id);

    myStore.setItem(
        id,
        JSON.stringify({
            ...columnToChange,
            title: titleHTML.textContent,
        })
    );
};
