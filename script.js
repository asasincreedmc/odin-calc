const numberButtons = document.querySelectorAll(".number");
const specialButtons = document.querySelectorAll(".special")
const displayText = document.querySelector(".display");
let displayValue = "";
const specialChars = document.querySelectorAll(".special");
let num1 = "";
let num2 = "";
let special = "a"
let operator = "a"
let willOperate = ""
let result = 0
let placeholder = ""
let wasCalculated = false
for (let button of numberButtons) {
    button.addEventListener("click", () => {
        if (willOperate) {
            displayValue = ""
            special = "a"
            willOperate = false
        }
        placeholder = button.textContent;
        changeDisplay()
    })
}
for (let button of specialButtons) {
    button.addEventListener("click", checkSpecial)
}

function checkSpecial(e) {
    if (willOperate) {
        displayValue = ""
        special = "a"
        willOperate = false
    }
    for (let char of specialChars) {
        char = char.textContent;
        if (e.target.textContent == char) {
            special = "a";
            if (special === "a") {
                special = char;
                console.log({ special })
                if (special != "C" && special != "=") {
                    storeData();
                    changeDisplay();
                } else if (special == "=") {
                    storeData();
                    changeDisplay();

                } else clearData()
            }
        }
    }
}

function calculate() {
    result = operate(+num1, operator, +num2)
    console.log({ num1, operator, num2 })
    return result;
}

function clearData() {
    if (special == "C") {
        num1 = ""
        willOperate = ""
        operator = "a"
        changeDisplay("C")
        wasCalculated = false
    } else {
        num1 = result
        operator = special;
        if (operator != "=") {
            willOperate = "true"
        }
    }
    num2 = "";
    result = 0
}

function changeDisplay(clear = "") {
    if ((num2 !== "" && special != "C" && special != "=" && special != "a")) {
        displayValue = calculate();
        clearData()
    } else if (special == "=") {
        displayValue = calculate();
        clearData()
        wasCalculated = true
    } else if (special != "C" && special != "=" && special != "a") {
        displayText.textContent = displayValue;
    } else if (clear == "C") {
        displayValue = ""
    } else displayValue += placeholder;

    console.log({ placeholder, displayValue })
    displayText.textContent = Math.round(displayValue * 100000) / 100000;

}

function storeData() {
    if (num1 === "") {
        num1 = displayValue
        operator = special;
        willOperate = true
        placeholder = 0;
    } else if (num2 === "") {
        if (wasCalculated) {
            wasCalculated = false
            operator = special
            willOperate = true
        } else num2 = displayValue
    } else {
        changeDisplay()
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
        return "Oops, can't divide by 0";
    } else return num1 / num2;
}