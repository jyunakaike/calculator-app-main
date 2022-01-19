const body = document.body

const setting1 = document.querySelector('.setting1')
const setting2 = document.querySelector('.setting2')
const setting3 = document.querySelector('.setting3')
const themeSelectBox = document.querySelector('.setting-btns')

const output = document.getElementById('output')

const calc = document.getElementById('calc-key')


let SelectedTheme = 1


setting1.addEventListener('click', () => {
    console.log('Clicksetting');
})

// Themes

// setting Theme1 
setting1.addEventListener('click', () => {
    //body 
    body.classList.remove('theme3')
    body.classList.remove('theme2')
    body.classList.add('theme1')

    // Setting container 
    themeSelectBox.classList.remove('settingTheme2')
    themeSelectBox.classList.remove('settingTheme3')
    themeSelectBox.classList.add('settingTheme1')

    // setting button
    setting2.classList.remove('show-darkOrange')
    setting2.classList.add('invisible')
    setting3.classList.remove('show-cyan')
    setting3.classList.add('invisible')
    setting1.classList.remove('invisible')
    setting1.classList.add('show-red')

    SelectecTheme = 1;

    // output
    output.classList.remove('main-container3')
    output.classList.remove('main-container2')
    output.classList.add('main-container1')

    // footer 
    calc.classList.remove('footer-container-bg3')
    calc.classList.remove('footer-container-bg2')
    calc.classList.add('footer-container-bg1')

    // footer key
    // change color of keys
    const keyColor1 = document.querySelectorAll('.key-color-1')
    keyColor1.forEach((color) => {
        color.style.color = `hsl(221, 14%, 31%)`  /*var(--text-keys)*/
        color.style.backgroundColor = ` hsl(30, 25%, 89%)`/*var(--key-background-orange)*/
        color.style.boxShadow = `0px 3px hsl(28, 16%, 65%)`/*0px 3px var(--key-shadow-orange)*/
    })

    const keyColor2 = document.querySelectorAll('.key-color-2')
    keyColor2.forEach((color) => {
        color.style.backgroundColor = `hsl(225, 21%, 49%)`
        color.style.boxShadow = `0px 3px hsl(224, 28%, 35%)`
    })

    const keyColor3 = document.querySelector('.key-color-3')
    keyColor3.style.color = `hsl(0, 0%, 100%)`
    keyColor3.style.backgroundColor = `hsl(6, 63%, 50%)`
    keyColor3.style.boxShadow = `0px 3px hsl(6, 70%, 34%)`

})

setting2.addEventListener('click', () => {
    // body
    body.classList.remove('theme1')
    body.classList.remove('theme3')
    body.classList.add('theme2')

    // setting container
    themeSelectBox.classList.remove('settingTheme1')
    themeSelectBox.classList.remove('settingTheme3')
    themeSelectBox.classList.add('settingTheme2')

    // setting button
    setting3.classList.remove('show-cyan')
    setting3.classList.add('invisible')
    setting1.classList.remove('show-red')
    setting1.classList.add('invisible')
    setting2.classList.remove('invisible')
    setting2.classList.add('show-darkOrange')

    themeSelectBox.style.backgroundColor = 'hsl(0, 5%, 81%);'

    // output
    output.classList.remove('main-container3')
    output.classList.remove('main-container1')
    output.classList.add('main-container2')

    // footer 
    calc.classList.remove('footer-container-bg3')
    calc.classList.remove('footer-container-bg1')
    calc.classList.add('footer-container-bg2')

    SelectecTheme = 2;

    // change color of keys
    const keyColor1 = document.querySelectorAll('.key-color-1')
    keyColor1.forEach((color) => {
        color.style.color = `hsl(221, 14%, 31%)`  /*var(--text-keys)*/
        color.style.backgroundColor = ` hsl(30, 25%, 89%)`/*var(--key-background-orange)*/
        color.style.boxShadow = `0px 3px hsl(28, 16%, 65%)`/*0px 3px var(--key-shadow-orange)*/
    })

    const keyColor2 = document.querySelectorAll('.key-color-2')
    keyColor2.forEach((color) => {
        color.style.backgroundColor = `hsl(185, 42%, 37%)`
        color.style.boxShadow = `0px 3px hsl(185, 58%, 25%)`
    })

    const keyColor3 = document.querySelector('.key-color-3')
    keyColor3.style.color = `hsl(0, 0%, 100%)`
    keyColor3.style.backgroundColor = `hsl(25, 98%, 40%)`
    keyColor3.style.boxShadow = `0px 3px hsl(25, 99%, 27%)`
})


// setting Theme3
setting3.addEventListener('click', () => {
    // body
    body.classList.remove('theme1')
    body.classList.remove('theme2')
    body.classList.add('theme3')

    // setting container
    themeSelectBox.classList.remove('settingTheme1')
    themeSelectBox.classList.remove('settingTheme2')
    themeSelectBox.classList.add('settingTheme3')

    // setting button
    setting1.classList.remove('show-red')
    setting1.classList.add('invisible')
    setting2.classList.remove('show-darkOrange')
    setting2.classList.add('invisible')
    setting3.classList.remove('invisible')
    setting3.classList.add('show-cyan')

    // output
    output.classList.remove('main-container2')
    output.classList.remove('main-container1')
    output.classList.add('main-container3')

    // footer 
    calc.classList.remove('footer-container-bg2')
    calc.classList.remove('footer-container-bg1')
    calc.classList.add('footer-container-bg3')

    // change color of keys
    const keyColor1 = document.querySelectorAll('.key-color-1')
    keyColor1.forEach((color) => {
        color.style.color = `hsl(52, 100%, 62%)`  /*var(--text-keys)*/
        color.style.backgroundColor = ` hsl(268, 47%, 21%)`/*var(--key-background-orange)*/
        color.style.boxShadow = `0px 3px hsl(290, 70%, 36%)`/*0px 3px var(--key-shadow-orange)*/
    })

    const keyColor2 = document.querySelectorAll('.key-color-2')
    keyColor2.forEach((color) => {
        color.style.backgroundColor = `hsl(281, 89%, 26%)`
        color.style.boxShadow = `0px 3px hsl(285, 91%, 52%)`
    })

    const keyColor3 = document.querySelector('.key-color-3')
    keyColor3.style.color = `hsl(198, 20%, 13%)`
    keyColor3.style.backgroundColor = `hsl(176, 100%, 44%)`
    keyColor3.style.boxShadow = `0px 3px hsl(177, 92%, 70%)`

    SelectecTheme = 3;
})