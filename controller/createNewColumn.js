import Column from "../model/Column";
import Storage from "../model/Storage";

let myStore = new Storage();

export default createNewColumn = () => {
    let input = document.getElementById("add-new-column");

    let column = new Column(input.value);
    myStore.addListToStorage(column);
    
    createNewColumnView(column.id, column.title);

    input.value = "";
};
