// Defining a function that will allow us to grab elements

const selectElement = selector =>{
    // The value of whatever that is passed in selector is stored in element
    const element = document.querySelector(selector)
    if(element==true){
        return element
    }
    else{
        throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`)
    }
}