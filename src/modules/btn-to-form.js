(function () {
    const btnsToForm = document.querySelectorAll('.btn-to-form');
    const footerForm = document.querySelector('.footer__form ');

    btnsToForm.forEach((element) => {
        element.addEventListener('click', () => {
            footerForm.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
    });
})();
