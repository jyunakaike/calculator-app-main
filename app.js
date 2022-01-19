
const setting1 = document.querySelector('.setting1')
const setting2 = document.querySelector('.setting2')
const setting3 = document.querySelector('.setting3')
const themeSelectBox = document.querySelector('.setting-btns')
let SelectedTheme= 1 


setting1.addEventListener('click',() => {
    console.log('Clicksetting');
})

// Themes

// setting Theme1 
setting1.addEventListener('click', () => {
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

    SelectecTheme = 1 ;
})

setting2.addEventListener('click', () => {


    themeSelectBox.classList.remove('settingTheme1')
    themeSelectBox.classList.remove('settingTheme3')
    themeSelectBox.classList.add('settingTheme2')

    setting3.classList.remove('show-cyan')
    setting3.classList.add('invisible')
    setting1.classList.remove('show-red')
    setting1.classList.add('invisible')
    setting2.classList.remove('invisible')
    setting2.classList.add('show-darkOrange')

    themeSelectBox.style.backgroundColor = 'hsl(0, 5%, 81%);'
    
    SelectecTheme = 2 ;
})


// setting Theme3
setting3.addEventListener('click', () => {
    
    themeSelectBox.classList.remove('settingTheme1')
    themeSelectBox.classList.remove('settingTheme2')
    themeSelectBox.classList.add('settingTheme3')

    setting1.classList.remove('show-red')
    setting1.classList.add('invisible')
    setting2.classList.remove('show-darkOrange')
    setting2.classList.add('invisible')
    
    setting3.classList.remove('invisible')
    setting3.classList.add('show-cyan')
    
    SelectecTheme = 2 ;
})