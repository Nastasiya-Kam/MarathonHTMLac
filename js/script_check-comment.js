let form = document.querySelector('.leave-comments');
let textarea = document.querySelector('textarea');
let button = document.querySelector('.button-comments');

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