const hamburger_menu = document.querySelector('.hamburger_menu');
const menu_items = document.querySelector('.header_options');
const black_screen = document.querySelector('.black_screen');

hamburger_menu.addEventListener('click', () => {
    menu_items.classList.toggle('active');
    hamburger_menu.classList.toggle('active');
    black_screen.classList.toggle('active');
});