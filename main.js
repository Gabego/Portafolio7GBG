const header = document.getElementById('header')
const menu = document.getElementById('nav-menu')

header.addEventListener('click', e => {
    const target = e.target
    if (e.target.closest('#nav-toggle')) {
        menu.classList.add('show--menu')
    }
    
    if (e.target.closest('#nav-close')) {
        menu.classList.add('show--menu')
    }

    if (e.target.closest('.nav__link')) {
        menu.classList.remove('show--menu')
    }

})