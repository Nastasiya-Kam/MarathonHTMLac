let articles = document.querySelectorAll('.articles__item');
let theme = document.querySelector('.articles__theme');

theme.onchange = function() {
    for (let article of articles) {
        if (article.dataset.category !== theme.value && theme.value !== 'all-articles') {
            article.classList.add('hidden');
        } else {
            article.classList.remove('hidden');
        };
    };
};
