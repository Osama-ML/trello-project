import closeModal from "./closeModal"

export default taskEditDialog = (task) => {
      console.log(task)
      const modalContainer = document.querySelector('.modal-wrapper')
      const modalTaskInput = document.querySelector('.editable-content')
      modalContainer.style.display = 'block'
      modalTaskInput.innerHTML = task
      modalContainer.addEventListener('focus', () => {
            document.querySelector('.header').style.filter = 'blur(1px)'
            document.querySelector('.container').style.filter = 'blur(1px)'
            document.querySelector('.footer').style.filter = 'blur(1px)'
      })
      modalContainer.focus()
      closeModal(modalContainer)
}