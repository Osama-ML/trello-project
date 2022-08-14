import {Column} from "../model/Column.js";
import {Task} from "../model/Task.js";

export const createNewTask = (inputValue, columnId) => {
    let task = new Task(inputValue.value);
    let actualStorage = Object.values(myStore.store).map((element) =>
        JSON.parse(element)
    );
    let currentColumn = actualStorage.find(
        (element) => element.id === columnId
    );

    let columnInstance = new Column(
        currentColumn.title,
        currentColumn.id,
        currentColumn.tasks
    );

    columnInstance.addTask(task);

    myStore.addListToStorage(columnInstance);

    return columnInstance.tasks;
};
