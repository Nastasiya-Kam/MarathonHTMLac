let commentForm = document.querySelector('.leave-comments');
let commentList = document.querySelector('.comments__list');
let inputComment = document.querySelector('.leave-comments__input')
let inputName = document.querySelector('.item-comments__name')
let inputEmail = document.querySelector('.item-comments__email')

commentForm.onsubmit = function(evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    let newCommentName = document.createElement('p');
    let newCommentText = document.createElement('p');
    
    newComment.classList.add('comments__item');
    newCommentName.classList.add('comments__user');
    newCommentName.classList.add('clearfix');
    newCommentText.classList.add('comments__content');
    
    newCommentName.textContent = inputName.value + ' (' + inputEmail.value + ')';
    newCommentText.textContent = inputComment.value;
    
    inputName.value = '';
    inputComment.value = '';
    inputEmail.value = '';

    commentList.append(newComment);
    newComment.append(newCommentName);
    newComment.append(newCommentText);
};