 // Defining a function that will allow us to grab elements

const selectElement = selector =>{
    // The value of whatever that is passed in selector is stored in element variable
    // There the value of all classes that are equal to element
    const element = document.querySelector(selector)
// If element exists and is selected return element
// else throw an error. I t  ried using normal if-else syntax, didn't work 
    if(element)
        return element 
        throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`)
}

// Adding the styles that trigger when scrolling
const scrollHeader=()=>{
    const headerElement =selectElement('#header')
    // Line below is for if the scroll has passed a certain point on the user screen
    if(this.scrollY>=15){
        headerElement.classList.add('activated')
    }else{
        headerElement.classList.remove('activated')
    }
}
window.addEventListener('scroll',scrollHeader)
// Open menu and search pop up
const menuToggleIcon = selectElement('#menu-toggle-icon')
const toggleMenu =()=>{
    const mobileMenu = selectElement('#menu')
    mobileMenu.classList.toggle('activated')
    menuToggleIcon.classList.toggle('activated')
}
menuToggleIcon.addEventListener('click',toggleMenu)


// To design the open and close search pop up

const formOpenBtn = selectElement('#search-icon')
const formCloseBtn = selectElement('#form-close-btn')
const searchForContainer = selectElement('#search-form-container')
const searchContainer = selectElement('#search-form-container')
formOpenBtn.addEventListener('click',()=> searchForContainer.classList.add('activated'))
formCloseBtn.addEventListener('click',()=> searchForContainer.classList.remove('activated'))

// To close the search pop up using ESC key
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Function that switches between themes
const bodyElement = document.body;
// Basically selecting the id for the dark theme and light theme
// You see how important that selector was at the beginning
const themeToggleButton = selectElement('#theme-toggle-btn');
// This 4 lines are also used to store the currentTheme inside the computer local storage
const currentTheme =localStorage.getItem('currentTheme');
if(currentTheme){
    bodyElement.classList.add('light-theme')
}
themeToggleButton.addEventListener('click' , () =>{
    bodyElement.classList.toggle('light-theme');
// Now we have to store the theme in local storage so it won't go after refreshing
    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive')
    }
    else{
        localStorage.removeItem('currentTheme')
    }
})