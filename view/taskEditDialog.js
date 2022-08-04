const taskEditDialog = () => {
      const modalContainer = document.createElement('div')
      const modalContent = document.createElement('span')
      modalContent.innerHTML = 'Texto de la modal de prueba'
      modalContent.className = '.modal-content'
      modalContainer.appendChild(modalContent)
      modalContainer.className = 'modal modal-show'
      const closeButton = document.createElement('button');
      closeButton.innerHTML = 'Cerrar'
      closeButton.addEventListener('click',() => {
            console.log('hola')
            modalContainer.style.display = 'none'
      })
      modalContainer.appendChild(closeButton)

      return modalContainer;
}