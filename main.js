class Label {

      constructor(){
            this.task = {
                  id: '',
                  title:'',
                  comments:[]
            }
      }

      createTask(title = ""){
            this.task = {
                  id: Date.now(),
                  title,
                  comments : []
            }
            console.log(this.task)
      }

      editTitleTask(editInfo){
            this.task = {...this.task, title: editInfo }
            console.log(this.task)
      }

      addComment(comment){
            this.task = {...this.task, comments: [...this.task.comments,comment]}
            console.log(this.task)
      }

}

// class List {

//       constructor() {
//             this.tasks = [];
//       }

//       createColumn(){
//             return this.tasks;
//       }
      
// }

let task1 = new Label;
let task2 = new Label;

task1.createTask("Primera tarea");
setTimeout(() => {
      task2.createTask("Segunda tarea");
}, 3000)

setTimeout(() => {
      task1.editTitleTask('Nuevo titulo')
}, 4000)

setTimeout(() => {
      task1.addComment('esto es un comentario')
}, 5000)

setTimeout(() => {
      task1.addComment('esto es otro comentario')
}, 6000)