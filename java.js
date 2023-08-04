let y = ""
let x = ""
let operator = ""
let result = ""

const numberListener = document.querySelectorAll(".number")
const currentDisplay = document.querySelector(".currentDisplay")
const operatorListener = document.querySelectorAll(".operator")
const previousDisplay = document.querySelector(".previousDisplay")
const equalListener = document.querySelector("#calculate")
const clearListener = document.querySelector("#clear")


numberListener.forEach(button => {
    button.addEventListener("click", () => {
        const clickedNumber = button.textContent
        appendNumberToInput(clickedNumber)
    })
})


function appendNumberToInput(number) {
    if (operator === "") {
        x += number
        updateCurrentDisplay(x)
        console.log(x)
    }
    else if (operator !== "") {
        y += number
        updateCurrentDisplay(y)
        updatePreviousDisplay(operator)
    }
}




function updateCurrentDisplay(number) {
    currentDisplay.textContent = number
}

function updatePreviousDisplay(clickedOperator) {
    previousDisplay.textContent = (`${x} ${clickedOperator} ${y}`)
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error: Cannot divide by zero!";
    }
    return x / y;
}


function clear() {
    y = ""
    x = ""
    result = ""
    operator = ""
    updateCurrentDisplay("")
    updatePreviousDisplay("")
}

clearListener.addEventListener("click", clear)

operatorListener.forEach(button =>
    button.addEventListener("click", () => {
        if (x !== "") {
            conntinueCaluclation()
            const clickedOperator = button.textContent
            operator = clickedOperator
            updatePreviousDisplay(operator)

        }
    }))

function conntinueCaluclation() {
    if (x !== "" && y !== "" && operator !== "") {
        operate()
        y = ""
        operator = ""
    }
}



equalListener.addEventListener("click", operate)

function operate() {
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);

    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        if (num2 !== 0) {
            result = divide(num1, num2);
        } else {
            result = "Error: Can not divied by zero";
            updateCurrentDisplay(result);
            setTimeout(clear, 1500);
            return;
        }
    }

    updateCurrentDisplay(result);

    x = result.toString();
    y = "";
    operator = "";
}



