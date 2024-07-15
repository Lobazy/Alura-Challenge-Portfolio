const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const form = document.querySelector('form');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
subjectInput.addEventListener('input', validateSubject);
messageInput.addEventListener('input', validateMessage);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateName();
    validateEmail();
    validateSubject();
    validateMessage();

    if (!nameInput.classList.contains('is-invalid') &&
        !emailInput.classList.contains('is-invalid') &&
        !subjectInput.classList.contains('is-invalid') &&
        !messageInput.classList.contains('is-invalid')) {
        form.submit();
    }
});

function validateName() {
    if (nameInput.value.trim().length > 50) {
        nameInput.classList.add('is-invalid');
    } else {
        nameInput.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
    } else {
        emailInput.classList.remove('is-invalid');
    }
}

function validateSubject() {
    if (subjectInput.value.trim().length > 50) {
        subjectInput.classList.add('is-invalid');
    } else {
        subjectInput.classList.remove('is-invalid');
    }
}

function validateMessage() {
    if (messageInput.value.trim().length > 300) {
        messageInput.classList.add('is-invalid');
    } else {
        messageInput.classList.remove('is-invalid');
    }
}