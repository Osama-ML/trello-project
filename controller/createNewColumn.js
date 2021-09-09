let myStore = new Storage();

const createNewColumn = () => {
    let input = document.getElementById("add-new-column");

    let column = new Column(input.value);
    myStore.addListToStorage(column);
    
    createNewColumnView(column.id, column.title);

    input.value = "";

};
