let buttonLike = document.querySelector('.like');
let numberLike = document.querySelector('.likes-number');

console.log(numberLike.textContent);

buttonLike.onclick = function() {
    if (buttonLike.classList.contains('added')) {
        numberLike.textContent--;
    } else {
        numberLike.textContent++;
    }
    buttonLike.classList.toggle('added');
};