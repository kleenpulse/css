let body = document.body
let themeBtn = document.querySelector('#themeButton')
const menuBtns = document.querySelectorAll('.menu-btn')

let savedTheme = localStorage.getItem('theme')

if (savedTheme) {
    body.className = savedTheme
}
let themes = ['light', 'solar', 'dark']

let count = (savedTheme !== undefined || null) ? themes.indexOf(savedTheme) : 0;

themeBtn.onclick = function () {
    count++
    let selected
    if (count === 0) {
        selected = themes[0]
    }
    if (count === 1) {
        selected = themes[1]
    } if (count === 2) {
        selected = themes[2]
    }
    if (count > 2) {
        selected = themes[0]
        count = 0
    }
    localStorage.setItem('theme', selected)
    body.className = selected
}

menuBtns.forEach(menuBtn => {

    menuBtn.addEventListener('click', () => {
        menuBtns.forEach(btn => {
            btn.classList.remove('am-active')

        })

        menuBtn.classList.add('am-active')
    })
})