const buttons = document.querySelectorAll("button");
const disp = document.querySelector("#output");
const histDisp = document.querySelector("#history");
let currentInput = [];
let history = [];

buttons.forEach(button => {
    button.addEventListener("click", buttonPress);
});

function buttonPress() {
    let buttonClass = this.classList.value;
    let buttonId = this.id;
    switch (buttonId) {
        case "button0":
            currentInput.push("0");
            disp.innerHTML = currentInput.join("");
            break;
        case "button1":
            currentInput.push("1");
            disp.innerHTML = currentInput.join("");
            break;
        case "button2":
            currentInput.push("2");
            disp.innerHTML = currentInput.join("");
            break;
        case "button3":
            currentInput.push("3");
            disp.innerHTML = currentInput.join("");
            break;
        case "button4":
            currentInput.push("4");
            disp.innerHTML = currentInput.join("");
            break;
         case "button5":
            currentInput.push("5");
            disp.innerHTML = currentInput.join("");
             break;
        case "button6":
            currentInput.push("6");
            disp.innerHTML = currentInput.join("");
            break;
        case "button7":
            currentInput.push("7");
            disp.innerHTML = currentInput.join("");
            break;
        case "button8":
            currentInput.push("8");
            disp.innerHTML = currentInput.join("");
            break;
        case "button9":
            currentInput.push("9");
            disp.innerHTML = currentInput.join("");
            break;
        case "buttonClear":
            currentInput = [];
            disp.innerHTML = "0";
            history = [];
            histDisp.innerHTML = "";
            break;
        case "buttonClearEntry":
            currentInput = [];
            disp.innerHTML = "0";
            break;
        case "buttonBackspace":
            currentInput.pop();
            (currentInput.length) ? disp.innerHTML = currentInput.join("") : disp.innerHTML = "0";
            break;
        case "buttonAdd":
            if (currentInput.length) {
                history.push(currentInput.join(""));
                history.push("+");
                histDisp.innerHTML = history.join(" ");
                currentInput = [];
                disp.innerHTML = calculate(history);
            }
            break;
        case "buttonSubtract":
            if (currentInput.length) {
                history.push(currentInput.join(""));
                history.push("-");
                histDisp.innerHTML = history.join(" ");
                currentInput = [];
                disp.innerHTML = calculate(history);
            }
            break;
        case "buttonMultiply":
            if (currentInput.length) {
                history.push(currentInput.join(""));
                history.push("*");
                histDisp.innerHTML = history.join(" ");
                currentInput = [];
                disp.innerHTML = calculate(history);
            }
            break;
        case "buttonDivide":
            if (currentInput.length) {
                history.push(currentInput.join(""));
                history.push("/");
                histDisp.innerHTML = history.join(" ");
                currentInput = [];
                disp.innerHTML = calculate(history);
            }
            break;
        case "buttonEquals":
            break;
        case "buttonDecimal":
            break;
        case "buttonSign":
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
        case "*":
            result = multiply(operands);
            break;
        case "/":
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