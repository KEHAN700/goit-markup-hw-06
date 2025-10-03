document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-close');
    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function () {
            mobileMenu.classList.add('is-open');
        });
    }
    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', function () {
            mobileMenu.classList.remove('is-open');
        });
    }

    const openModalBtn = document.querySelector('[data-open-modal]');
    const modalBackdrop = document.getElementById('contact-modal');
    const closeModalBtn = document.querySelector('.btn-modal-close');

    if (openModalBtn && modalBackdrop) {
        openModalBtn.addEventListener('click', function () {
            modalBackdrop.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModalBtn && modalBackdrop) {
        closeModalBtn.addEventListener('click', function () {
            modalBackdrop.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    }

});