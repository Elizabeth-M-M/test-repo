const openModalButton = document.querySelector('#openModal');
const closeModalButton = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay');
overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active')
    modal.classList.remove('active');
    overlay.classList.remove("active");
})
openModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    if(modal=== null)return
    modal.classList.add("active");
    overlay.classList.add("active");
})
closeModalButton.addEventListener('click', () => {
    const modal = document.querySelector(openModalButton.dataset.modalTarget)
    if(modal=== null)return
    modal.classList.remove("active");
    overlay.classList.remove("active");
})

