/*const inputForm = document.getElementById("collatz-input")
inputForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputElement = document.getElementById("input-number")
    const input = inputElement.value

    if (!(input > 0)) {
        return
    }

    const result = collatz(input)
    const newElement = createElement(result)
    const resultContainer = document.getElementById("result-container")
    resultContainer.appendChild(newElement)

    inputForm.reset()
})

/*function collatz(number) {
    console.log (number)

    const newNumber = number - 1

    if (newNumber <= 0) {
        return newNumber
    } else {
        return collatz(newNumber)
    }
}*/
function collatzA(number) {
    if (number === 1) {
        return
    }

    const isEven = ( number % 2 ) === 0

    if (isEven) {
        console.log(number + " is even")

        number = number / 2
    } else {
        console.log(number + " is odd")

        number = (number * 3) + 1
    }

    collatz(number)
}
function collatzB(number) {
    const numberRow = []
    numberRow.push(number)
    
    while (number > 1) {
        const isEven = (number % 2) === 0

        if (isEven) {
            number = number / 2
        } else {
            number = (number * 3) + 1
        }

        numberRow.push(number)
    }

    return numberRow
}
const numberA = 13
collatzB(numberA)
console.log(row)

/*function isEven(number) {
    return number % 2 === 0
}

function createElement(number) {
    const element = document.createElement("li")
    element.textContent = number
    return element
}