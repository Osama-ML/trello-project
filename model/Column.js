import {idGenerator} from "./idGenerator.js";

export class Column {

      constructor(title, id = idGenerator(), tasks = []) {
            this.tasks = tasks;
            this.title = title;
            this.id = id;
      }

      putTitleColumn(title){
            this.title = title;
      }

      addTask(task){
            this.tasks = [...this.tasks, task]
      }

      deleteTask(taskId){
            this.tasks = this.tasks.filter(task => task.id !== taskId)
      }
      
}