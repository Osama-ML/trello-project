const deleteColumn = (columnId) => {
    const currentColumn = document.getElementById(columnId);

    currentColumn.remove();
    const myStore = new Storage();

    myStore.store.removeItem(columnId);
};
