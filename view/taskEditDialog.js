const taskEditDialog = (task) => {
      console.log(task)
      const modalContainer = document.querySelector('.modal-wrapper')
      const modalTaskInput = document.querySelector('.editable-content')
      modalContainer.style.display = 'block'
      modalTaskInput.innerHTML = task
      closeModal(modalContainer)
}