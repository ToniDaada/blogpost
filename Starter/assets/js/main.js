// Defining a function that will allow us to grab elements

const selectElement = selector =>{
    // The value of whatever that is passed in selector is stored in element variable
    // There the value of all classes that are equal to element
    const element = document.querySelector(selector)
// If element exists and is selected return element
// else throw an error. I tried using normal if-else syntax, didn't work 
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
