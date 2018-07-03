let dropDownMenuOptions = document.querySelectorAll('.dropdown-item')
let typeOfUnit = "pounds"
let inputValue = ''
let kgOutput = ''
let ozOutput = ''
let gOutput = ''
let lbsOutput = ''


dropDownMenuOptions.forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.input-search').placeholder = el.firstChild.data
        changeDisplaingCards(document.querySelector('.input-search').placeholder)
        // if(placeholder === z którymś z opcji ){
        //     to którąś z opcji zamień na typeOfUnit
        // }

        changeTypeOfUnit(el)
        convertValues()
        displayResult()
    })
})


document.querySelector('#lbs-input').addEventListener('input', (e) => {
    let lbs = e.target.value
    inputValue = e.target.value
    document.querySelector('#grams-output').innerHTML = `<span>${lbs / 0.0022046}</span>`
    document.querySelector('#kg-output').innerHTML = `<span>${lbs / 2.2046}</span>`
    document.querySelector('#oz-output').innerHTML = `<span>${lbs * 16}</span>`
    setZero(e)
})

const setZero = (e) => {
    if (e.target.value === null || e.target.value === 0 || e.target.value === "") {
        document.querySelector('#grams-output').innerHTML = ``
        document.querySelector('#kg-output').innerHTML = ``
        document.querySelector('#oz-output').innerHTML = ``
    }
}


const dropDownPlaceholder = () => {

    document.querySelector('.input-search').placeholder = i
}

const changeTypeOfUnit = (el) => {
    typeOfUnit = el.firstChild.data.toLowerCase()
}
const changeDisplaingCards = (changedOption) => {

    document
    .querySelectorAll('.card-title')
    .forEach((el) => {
        // console.log("el.firstChild: ", el.firstChild.data)
        // console.log("typeofunit: ", typeOfUnit)
        if (el.firstChild.data === changedOption) {
            el.firstChild.data = typeOfUnit.charAt(0).toUpperCase() + typeOfUnit.slice(1)
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

}

const switchCard = () => {

   
}