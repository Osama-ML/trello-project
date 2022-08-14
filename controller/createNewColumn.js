import {Column} from "../model/Column.js";
import {Storage} from "../model/Storage.js";
import {createNewColumnView} from "../view/columnComponent.js"

let myStore = new Storage();

export const createNewColumn = () => {
    let input = document.getElementById("add-new-column");

    let column = new Column(input.value);
    myStore.addListToStorage(column);
    
    createNewColumnView(column.id, column.title);

    input.value = "";
};
