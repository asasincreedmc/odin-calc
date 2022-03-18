const buttons = document.querySelectorAll(".button");
const displayText = document.querySelector(".display");
let displayValue = "";
const specialChars = document.querySelectorAll(".special");
let num1 = "";
let num2 = "";
let special = "a"
let operator = "a"
let willOperate = ""
let result = 0
for (let button of buttons) {
    button.addEventListener("click", () => {
        if (willOperate) {
            displayText.textContent = "";
            willOperate = false
        }
        displayText.textContent += button.textContent;
        checkSpecial()
    })
}

function checkSpecial() {
    for (let char of specialChars) {
        if (displayText.textContent.includes(`${char.textContent}`)) {
            special = "a";
            if (special === "a") {
                special = char.textContent;
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
//make num2 on sotredata return calc() and store data so when + is selected again storedata will calculate and then erase all data except result = num1
function changeDisplay(clear = "") {
    if ((num2 !== "" && special != "C" && special != "=")) {
        displayText.textContent = calculate();
        console.log({ operator })
        clearData()

    } else if (special == "=") {
        displayText.textContent = calculate();
    } else if (special != "C" && special != "=") {
        displayText.textContent = displayValue;
    } else if (clear == "C") {
        displayText.textContent = ""
    } else displayText.textContent += EventTarget.textContent;
    displayValue = displayText.textContent;

}

function calculate() {
    result = operate(+num1, operator, +num2)
    console.log(num1, operator, num2, result)
    return result;
}

function clearData() {
    if (special == "C") {
        num1 = ""
        willOperate = ""
        operator = "a"
        changeDisplay("C")
    } else {
        num1 = result
        willOperate = "true"
        operator = special
    }
    num2 = "";
    special = "a"
    result = 0
}

function storeData() {
    displayValue = displayText.textContent.slice(0, -1);
    if (num1 === "") {
        num1 = displayValue
        operator = special;
        willOperate = true
    } else if (num2 === "") {
        num2 = displayValue
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