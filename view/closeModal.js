export default closeModal = (modal) => {
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click',() => {
        modal.style.display = 'none'
    })
    modal.addEventListener('blur',() => {
        modal.style.display = 'none'
        document.querySelector('.header').style.filter = ''
        document.querySelector('.container').style.filter = ''
        document.querySelector('.footer').style.filter = ''
  })
}