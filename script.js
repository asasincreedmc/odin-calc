const buttons = document.querySelectorAll(".button");
const displayValue = document.querySelector(".display");
const specialChars = document.querySelectorAll(".special");
let num1 = "";
let num2 = "";

let special = "a"
let operator = "a"
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
                    console.log({ special })
                    special = "a"
                } else if (special == "=") {
                    storeData()
                    displayValue.textContent = operate(+num1, operator, +num2)
                }
            }

        }
    }
}

function storeData() {
    if (num1 === "") {
        num1 = displayValue.textContent.slice(0, -1)
        operator = special;
    } else if (num2 === "") {
        num2 = displayValue.textContent.slice(0, -1)
    }
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