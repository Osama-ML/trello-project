let myStore = new Storage();

const createNewColumn = () => {
    let input = document.getElementById("add-new-column");

    let column = new Column(input.value);
    myStore.addListToStorage(column);

    // let task1 = new Task("task1");
    // let task2 = new Task("task2");
    // let task3 = new Task("task3");

    // column.addTask(task1);
    // column.addTask(task2);
    // column.addTask(task3);
    
    createNewColumnView(column.id, column.title);

    
    
    input.value = "";

};
