class Task {

      constructor(){
            this.task = {
                  id: '',
                  title:'',
                  description: '',
                  comments:[]
            }
      }

      createTask(title = ""){
            this.task = {
                  id: Date.now(),
                  title,
                  description: '',
                  comments : []
            }
      }

      editTitleTask(newTitle = ""){
            this.task = {...this.task, title: newTitle }
      }

      addDescriptionTask(description = ""){
            this.task = {...this.task, description}
      }

      addCommentTask(comment = ""){
            this.task = {...this.task, comments: [ {id: Date.now(), comment}, ...this.task.comments]}
      }

      editCommentTask(commentId, newComment) {
            let arrComments = this.task.comments.filter(comment => comment.id === commentId);
            console.log(arrComments)
            this.task.comments = [...arrComments, {id: commentId , comment: newComment}];
      }

      deleteCommentTask(commentId) {

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

let task1 = new Task;
task1.createTask('Agregar funcionalidad al Front');
task1.addDescriptionTask('Descripción de la tarea');
task1.addCommentTask('comentario para borrar');
setTimeout(() => {
      task1.addCommentTask('Creo que estamos teniendo serias daudas con esta tarea');
})
task1.addDescriptionTask('Descripción 2 de la tarea');

console.log(task1)

setTimeout(() => {
      task1.editCommentTask(task1.task.comments[0].id, "Comentario editado")
})

console.log(task1)