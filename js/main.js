'use strict';
const cartBtn = document.querySelector('.cart-btn'),
    modal = document.querySelector('.modal'),
    closeBtn = modal.querySelector('.close'),
    cancelBtn = modal.querySelector('.button-cancel'),
    modalBody = modal.querySelector('.modal-body'),
    modalPricetag = modal.querySelector('.modal-pricetag');

const closeModal = () => {
    modal.classList.remove('active');
};

const clearModal = () => {
    modalBody.innerHTML = '';
    modalPricetag.innerText = "0 ₽";
};

const openModal = () => {
    modal.classList.add('active');
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', clearModal);
    document.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
            closeModal();
        }
    });
};

cartBtn.addEventListener('click', openModal);

