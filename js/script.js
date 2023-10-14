// toogle class active
const menu = document.querySelector('.menu');

// ketika humbermer-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    menu.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
    }
});