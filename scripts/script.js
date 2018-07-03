let typeOfUnit = "pounds" 
let inputValue = ''
let kgOutput = ''
let ozOutput = ''
let gOutput = ''
let lbsOutput = ''

const addEventListenersToDropDownMenu = () => {
    document.querySelectorAll('.dropdown-item').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector('.input-search').placeholder = el.firstChild.data
            changeDisplaingCards(document.querySelector('.input-search').placeholder)
            changeTypeOfUnit(el)
            convertValues()
            displayResult()
        })
    })
}
const addEventListenerToTextInput = () => {
    document.querySelector('#lbs-input').addEventListener('input', (e) => {
        inputValue = e.target.value
        convertValues()
        displayResult()
    })
}
const changeTypeOfUnit = (el) => {
    typeOfUnit = el.firstChild.data.toLowerCase()
}
const changeDisplaingCards = (changedOption) => {
    document
        .querySelectorAll('.card-title')
        .forEach((el) => {
            if (el.firstChild.data === changedOption) {
                el.firstChild.data = typeOfUnit.charAt(0).toUpperCase() + typeOfUnit.slice(1)
                el.nextElementSibling.id = el.firstChild.data + '-output'   
            }
        })
}
const convertValues = () => {
    switch (typeOfUnit) {
        case "pounds":
            kgOutput = inputValue / 2.2046
            gOutput = inputValue / 0.0022046
            ozOutput = inputValue * 16
            break;
        case "kilograms":
            gOutput = inputValue * 1000
            ozOutput = inputValue * 35
            lbsOutput = inputValue * 2.2
            break;
        case "grams":
            kgOutput = inputValue * 0.001
            ozOutput = inputValue * 0.03527
            lbsOutput = inputValue * 0.002204
            break;
        case "ounces":
            gOutput = inputValue * 28
            kgOutput = inputValue * 0.028
            lbsOutput = inputValue * 0.0625
            break;
        default:
            console.log('default')
    }
}
const displayResult = () => {
   if(document.querySelector('#Ounces-output'))document.querySelector('#Ounces-output').innerHTML = ozOutput
   if(document.querySelector('#Kilograms-output'))document.querySelector('#Kilograms-output').innerHTML = kgOutput
   if(document.querySelector('#Grams-output'))document.querySelector('#Grams-output').innerHTML = gOutput
   if(document.querySelector('#Pounds-output'))document.querySelector('#Pounds-output').innerHTML = lbsOutput
}
const validationTextInput = () => {
    
}
addEventListenerToTextInput()
addEventListenersToDropDownMenu()
