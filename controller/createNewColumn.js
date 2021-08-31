let myStore = new Storage();

const createNewColumn = () => {
    let input = document.getElementById("add-new-column");

    let list = new Column(input.value);
    myStore.addListToStorage(list);

    createNewColumnView(list.id, list.title);

    input.value = "";
};
