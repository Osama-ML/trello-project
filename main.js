class Task {

      constructor() {
            this.id = '';
            this.title = '';
            this.description = '';
            this.comments = [];
      }

      putTitleTask(title = ""){
            this.title = title;
      }

      putDescriptionTask(description = ""){
            this.description = description
      }

      addCommentTask(comment = ""){
            this.comments = [ {id: idGenerator(), comment}, ...this.comments]
      }

      editCommentTask(commentId, newComment) {

            let arrComments = this.comments.filter(comment => comment.id !== commentId);
            this.comments = [...arrComments, {id: commentId , comment: newComment}];
      }

      deleteCommentTask(commentId) {
            this.comments = this.comments.filter(comment => comment.id != commentId);
      }

}

class List {

      constructor() {
            this.tasks = [];
            this.title = ""
            this.id = idGenerator();
      }

      putTitleColumn(title){
            this.title = title;
      }

      addTask(task){
            this.tasks = [task, ...this.tasks]
      }

      deleteTask(taskId){
            this.tasks = this.tasks,filter(task => task.id !== taskId)
      }
      
}

const idGenerator = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
}

