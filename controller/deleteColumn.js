import {Storage} from "../model/Storage.js";

export const deleteColumn = (columnId) => {
    const currentColumn = document.getElementById(columnId);

    currentColumn.remove();
    const myStore = new Storage();

    myStore.store.removeItem(columnId);
};
