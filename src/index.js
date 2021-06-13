// import './sass/main.scss';
import template from './menu.hbs';
import menu from './menu.json';


const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', template(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const themeToggle = document.querySelector('#theme-switch-toggle');
themeToggle.addEventListener('change', onThemeSwitch);

loadTheme();

function onThemeSwitch() {
    if (themeToggle.checked === true) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', 'light');
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        themeToggle.checked = true;
        document.body.classList.add(Theme.DARK);
    }
}