class Column {

      constructor(title) {
            this.tasks = [];
            this.title = title;
            this.id = idGenerator();
      }

      putTitleColumn(title){
            this.title = title;
      }

      addTask(task){
            this.tasks = [task, ...this.tasks]
      }

      deleteTask(taskId){
            this.tasks = this.tasks.filter(task => task.id !== taskId)
      }
      
}

const idGenerator = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
}