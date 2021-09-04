createTasksView = (columnId,tasks) => {
      console.log(columnId)
      let column = document.getElementById(columnId);
      let tasksDiv = column.querySelector('#tasks-container');
      let tasksList = document.createElement('ul');
      let taskHTML = document.createElement('li');
      tasksDiv.appendChild(tasksList)

      tasks.map(task => {
            
            taskHTML.setAttribute('id', task.id);
            taskHTML.textContent = task.title
            
      })
      
      tasksList.appendChild(taskHTML);

}