const taskEditDialog = () => {
      const modalContainer = document.createElement('div')
      const modalContent = document.createElement('span')
      modalContent.innerHTML = 'Texto de la modal de prueba'
      modalContent.className = '.modal-content'
      modalContainer.appendChild(modalContent)
      modalContainer.className = 'modal modal-show'
      closeModal(modalContainer)
      modalContainer.addEventListener('blur', () => {
            console.log('blurrrr')
            modalContainer.style.display = 'none'
      })
      return modalContainer;
}