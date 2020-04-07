const buttons = document.querySelectorAll("button");
const disp = document.querySelector("#output");
const histDisp = document.querySelector("#history");
const displayLimit = 11;
let currentInput = [];
let history = [];
let prevOperator = "";

buttons.forEach(button => {
    button.addEventListener("click", buttonPress);
});

function buttonPress() {
    let buttonClass = this.classList.value;
    let buttonId = this.id;
    let num;
    let currentOperator;
    console.log(currentInput);
    switch (buttonId) {
        case "button0":
            num = 0;
            break;
        case "button1":
            num = 1;
            break;
        case "button2":
            num = 2;
            break;
        case "button3":
            num = 3;
            break;
        case "button4":
            num = 4;
            break;
         case "button5":
            num = 5;
             break;
        case "button6":
            num = 6;
            break;
        case "button7":
            num = 7;
            break;
        case "button8":
            num = 8;
            break;
        case "button9":
            num = 9;
            break;
        case "buttonClear":
            prevOperator = "";
            currentInput = [];
            disp.innerHTML = 0;
            history = [];
            histDisp.innerHTML = "";
            break;
        case "buttonClearEntry":
            currentInput = [];
            disp.innerHTML = 0;
            break;
        case "buttonBackspace":
            currentInput.pop();
            (currentInput.length) ? disp.innerHTML = currentInput.join("") : disp.innerHTML = 0;
            break;
        case "buttonAdd":
            currentOperator = "+";
            break;
        case "buttonSubtract":
            currentOperator = "-";
            break;
        case "buttonMultiply":
            currentOperator = "×";
            break;
        case "buttonDivide":
            currentOperator = "÷";
            break;
        case "buttonEquals":
            if (currentInput.length || history.length) {
                history.push(currentInput.join(""), "=");
                histDisp.innerHTML = history.join(" ");
                let temp = calculate(history);
                currentInput = [temp];
                if (temp.toString().length <= displayLimit) {
                    disp.innerHTML = temp;
                }
                else {
                    disp.innerHTML = temp.toFixed(displayLimit - 1);
                }
                history = [];
            }
            prevOperator = "=";
            break;
        case "buttonDecimal":
            if (!currentInput.includes(".") && !currentInput.includes("0.")) {
                if (!currentInput.length || prevOperator === "=" ) {
                    currentInput = ["0."];
                    history = [];
                    prevOperator = "";
                    histDisp.innerHTML = "";
                }
                else {
                    currentInput.push(".");
                }
                disp.innerHTML = currentInput.join("");
            }
            break;
        case "buttonSign":
            if (currentInput.length && currentInput[0] === "-") {
                currentInput.shift();
                disp.innerHTML = currentInput.join("");
            }
            else if (currentInput.length && !(currentInput.length === 1 && currentInput[0] === 0)) {
                currentInput.unshift("-");
                disp.innerHTML = currentInput.join("");
            }
            break;
    }
    switch (buttonClass) {
        case "numBut":
            if (currentInput.join("").split("").length <= displayLimit) {
                if (prevOperator === "=") {
                    currentInput = [num];
                    history = [];
                    prevOperator = "";
                    histDisp.innerHTML = "";
                }
                else if (currentInput[0] === 0 && currentInput[1] !== ".") {
                    currentInput = [num];
                }
                else {
                    currentInput.push(num);
                }
                disp.innerHTML = currentInput.join("");
            }
            break;
        case "opBut":
            if ((currentInput.length || history.length)  && prevOperator != currentOperator) {
                history.push(currentInput.join(""), currentOperator);
                histDisp.innerHTML = history.join(" ");
                currentInput = [];
                let temp = calculate(history);
                if (temp.toString().length <= displayLimit) {
                    disp.innerHTML = temp;
                }
                else {
                    disp.innerHTML = temp.toFixed(displayLimit - 1);
                }
            }
            prevOperator = currentOperator;
            break;
    }
}

function calculate(equation) {
    let operands = [];
    let operators = [];
    let result;
    for (let i = 0; i < (equation.length - 1); i++) {
        if (isNaN(Number(equation[i]))) {
            operators.push(equation[i]);
        }
        else {
            operands.push(Number(equation[i]));
        }
    }
    if (operands.length < 2) {
        result = operands[0];
    }
    else {
        let x, y, operator;
        for (let i = 0; i < operators.length; i++) {
            if (i) {
                x = result;
                y = operands[i + 1];
                operator = operators[i];
                result = operate(operator, x, y);
            }
            else {
                x = operands[i];
                y = operands[i + 1];
                operator = operators[i];
                result = operate(operator, x, y);
            }
        }
    }
    return result;
}

function operate() {
    let operator = arguments[0];
    let operands = [];
    let result;
    for (let i = 1; i < arguments.length; i++) {
        operands.push(arguments[i]);
    }
    switch (operator) {
        case "+":
            result = add(operands);
            break;
        case "-":
            result = subtract(operands);
            break;
        case "×":
            result = multiply(operands);
            break;
        case "÷":
            result = divide(operands);
            break;
    }
    return result;
}

function add() {
    let sum;
    let operands = arguments[0];
    for (let i = 0; i < operands.length; i++) {
        (i === 0) ? sum = operands[i] : sum += operands[i];
    }
    return sum;
}

function subtract() {
    let difference;
    let operands = arguments[0];
    for (let i = 0; i < operands.length; i++) {
        (i === 0) ? difference = operands[i] : difference -= operands[i];
    }
    return difference;
}

function multiply() {
    let product;
    let operands = arguments[0];
    for (let i = 0; i < operands.length; i++) {
        (i === 0) ? product = operands[i] : product *= operands[i];
    }
    return product;
}

function divide() {
    let quotient;
    let operands = arguments[0];
    for (let i = 0; i < operands.length; i++) {
        (i === 0) ? quotient = operands[i] : quotient /= operands[i];
    }
    return quotient;
}