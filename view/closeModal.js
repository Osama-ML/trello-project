const closeModal = (modal) => {
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Cerrar'
    closeButton.addEventListener('click',() => {
        modal.style.display = 'none'
    })
    modal.appendChild(closeButton)
}