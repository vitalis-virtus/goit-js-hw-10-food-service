import './styles.css';
import foodArray from "./menu.json"
import menuTemplate from "./templates/menu.hbs"

const refs = {
    menu: document.querySelector(".js-menu"),
    checkBox: document.getElementById('theme-switch-toggle'),
    body: document.getElementsByTagName("BODY"),
}

const markUp = menuTemplate(foodArray);
refs.menu.innerHTML = markUp;

// Theme

const themes = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const baseTheme = () => {
    if (localStorage.getItem("theme") === "DARK") 
    {
    refs.body[0].classList.add(themes.DARK);
    refs.checkBox.checked = true;
    }
    refs.body[0].classList.add(themes.LIGHT)    
}

const switchTheme = () => {
    if (refs.checkBox.checked) {
        refs.body[0].classList.replace(themes.LIGHT, themes.DARK);
        localStorage.setItem('theme', "DARK")
    }
    else {
        refs.body[0].classList.replace(themes.DARK, themes.LIGHT);
        localStorage.setItem('theme', "LIGHT")
    }
}

baseTheme();

refs.checkBox.addEventListener('change', switchTheme)
