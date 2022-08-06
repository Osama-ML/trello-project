const closeModal = (modal) => {
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click',() => {
        modal.style.display = 'none'
    })
}