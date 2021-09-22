const taskEditDialog = (taskHTML) => {

      const taskDialog = document.createElement('dialog')
      taskDialog.textContent = 'hi from xd' 
      const closeButton = document.createElement('button')
      closeButton.textContent = 'Close'

      taskDialog.appendChild(closeButton)

      closeButton.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('close dialog')
            taskDialog.close()
      })

      taskHTML.appendChild(taskDialog)

      return taskDialog;
}