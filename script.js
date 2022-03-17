const buttons = document.querySelectorAll(".button");
const displayValue = document.querySelector(".display");
const specialChars = document.querySelectorAll(".special");
let num1 = "";
let num2 = "";
let special = "a"
let operator = "a"
let result = 0
for (let button of buttons) {
    button.addEventListener("click", () => {
        displayValue.textContent += button.textContent;
        checkSpecial()
    })
}

function checkSpecial() {
    for (let char of specialChars) {
        if (displayValue.textContent.includes(`${char.textContent}`)) {
            if (special === "a") {
                special = char.textContent;
                if (special != "C" && special != "=") {
                    storeData()
                    displayValue.textContent = ""
                } else if (special == "=") {
                    storeData()
                    displayValue.textContent = calculate()
                } else clearData()
            }

        }
    }
}

function calculate() {
    result = operate(+num1, operator, +num2)
    return result;
}

function clearData() {
    if (special == "C") {
        num1 = ""
    } else num1 = result
    num2 = "";
    special = "a"
    operator = "a"
    result = 0
    displayValue.textContent = ""
}

function storeData() {
    if (num1 === "") {
        num1 = displayValue.textContent.slice(0, -1)
        operator = special;
    } else if (num2 === "") {
        num2 = displayValue.textContent.slice(0, -1)
    }
    special = "a";
}

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return substract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "OOPS";
    } else return num1 / num2;
}