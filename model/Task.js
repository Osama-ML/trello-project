class Task {

      constructor(title) {
            this.id = idGenerator();
            this.title = title;
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