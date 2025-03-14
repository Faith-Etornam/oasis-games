const heroSection = document.querySelector('.hero-section');
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');

function onScroll() {
    if (window.scrollY > 140) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled')
    }
}

window.addEventListener('scroll', onScroll)
hamburger.addEventListener('click', (e) => {
    if (menu.classList.contains('menu-show')) {
        menu.classList.remove('menu-show')
        console.log('show');
    }
    else {
        menu.classList.add('menu-show');
        main.classList.add("blurry");
    }
})