const header = document.getElementById('header')
const menu = document.getElementById('nav-menu')

header.addEventListener('click', e => {
    const target = e.target
    if (e.target.closest('.btn__open')) {
        menu.classList.add('show__menu')
    }
    
    if (e.target.closest('.btn__close')) {
        menu.classList.remove('show__menu')
    }

    if (e.target.closest('.nav__link')) {
        menu.classList.remove('show__menu')
    }

})