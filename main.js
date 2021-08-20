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
                  id: idGenerator(),
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
            this.task = {...this.task, comments: [ {id: idGenerator(), comment}, ...this.task.comments]}
      }

      editCommentTask(commentId, newComment) {

            let arrComments = this.task.comments.filter(comment => comment.id != commentId);
            this.task.comments = [...arrComments, {id: commentId , comment: newComment}];
      }

      deleteCommentTask(commentId) {
            this.task.comments = this.task.comments.filter(comment => comment.id != commentId);
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

const idGenerator = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
}

let task1 = new Task;
task1.createTask('Agregar funcionalidad al Front');
task1.addDescriptionTask('Descripción de la tarea');
task1.addCommentTask('comentario para borrar');
setTimeout(() => {
      task1.addCommentTask('Creo que estamos teniendo serias daudas con esta tarea');
},1000);

setTimeout(() => {
      task1.addCommentTask('Este comentario no se puede borrar uwu');
},1500);

task1.addDescriptionTask('Descripción 2 de la tarea');

setTimeout(() => {
      let editComment = task1.task.comments.find(comment => comment.comment == "comentario para borrar" )
      task1.deleteCommentTask(editComment.id,)
}, 2000)

setTimeout(() => {

      console.log(task1)
},5000)
