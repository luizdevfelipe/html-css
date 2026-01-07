document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const list = document.querySelector('ul');
    const closeButton = document.querySelector('.close-button');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        list.classList.toggle('modal-open');
    });

    closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        list.classList.remove('modal-open');
    });

});