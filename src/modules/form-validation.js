//* Сделал простую валидацию формы, юзер френдли)
//* Особо не знаком с php поэтому не смог сделать отправку

(function () {
    const emailRegExp = /^\S+@\S+\.\S+$/;

    const form = document.querySelector('.footer__form');
    const question = document.getElementById('question');
    const name = document.getElementById('name');
    const link = document.getElementById('link');
    const email = document.getElementById('email');

    const submitHandler = async (event) => {
        event.preventDefault();

        if (validateFields()) {
            const data = {
                question: question.value,
                name: name.value,
                link: link.value,
                email: email.value,
            };

            console.log(data);
        }
    };

    const validateFields = () => {
        let isFormSuccess = true;
        const questionValue = question.value.trim();
        const nameValue = name.value.trim();
        const linkValue = link.value.trim();
        const emailValue = email.value.trim();

        if (questionValue === '') {
            setErorr(question, 'Пожалуйста напишите тему вопрса');
            isFormSuccess = false;
        } else {
            setSuccess(question);
        }

        if (nameValue === '') {
            setErorr(name, 'Это поле не должно быть пустым');
            isFormSuccess = false;
        } else {
            setSuccess(name);
        }

        if (linkValue === '') {
            setErorr(link, 'Это поле не должно быть пустым');
            isFormSuccess = false;
        } else {
            setSuccess(link);
        }

        if (emailValue === '') {
            setErorr(email, 'Это поле не должно быть пустым');
            isFormSuccess = false;
        } else if (!validateEmail(emailValue)) {
            setErorr(email, 'Это не похоже не почту');
            isFormSuccess = false;
        } else {
            setSuccess(email);
        }

        return isFormSuccess;
    };

    const setErorr = (input, message) => {
        const inputLabel = input.parentElement;
        const errorText = inputLabel.querySelector('small');

        inputLabel.classList.add('error');
        input.classList.add('error');

        errorText.innerText = message;
    };

    const setSuccess = (input) => {
        const inputLabel = input.parentElement;

        input.classList.remove('error');
        inputLabel.classList.remove('error');
    };

    const validateEmail = (email) => {
        return emailRegExp.test(email);
    };

    form.addEventListener('submit', submitHandler);
})();
