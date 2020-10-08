let form = document.querySelector('.write-us__form');
let textarea = document.querySelector('textarea');
let button = form.querySelector('.button');

textarea.oninput = function() {
    if (textarea.value.length < 10) {
        textarea.classList.add('warning');
        button.disabled = true;
    } else if (textarea.value.length > 200) {
        textarea.classList.add('warning');
        button.disabled = true;
    } else {
        textarea.classList.remove('warning');
        button.disabled = false;
    };
};