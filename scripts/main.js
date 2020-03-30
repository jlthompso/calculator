const buttons = document.querySelectorAll("button");
const disp = document.querySelector("#output");
const histDisp = document.querySelector("#history");
let operands = [];
let history = [];
let input = 0;
const base = 10; // decimal

buttons.forEach(button => {
    button.addEventListener("click", buttonPress);
});

function buttonPress() {
    let buttonClass = this.classList.value;
    let buttonId = this.id;
    switch (buttonId) {
        case "button0":
            if (operands.length !== 0) {
                operands.push(0);
                updateDisplay(operands);
            }
            input *= base;
            updateDisplay(input);
            break;
        case "button1":
            //operands.push(1);
            //updateDisplay(operands);
            input *= base;
            input += 1;
            updateDisplay(input);
            break;
        case "button2":
            //operands.push(2);
            //updateDisplay(operands);
            input *= base;
            input += 2;
            updateDisplay(input);
            break;
        case "button3":
            //operands.push(3);
            //updateDisplay(operands);
            input *= base;
            input += 3;
            updateDisplay(input);
            break;
        case "button4":
            //operands.push(4);
            //updateDisplay(operands);
            input *= base;
            input += 4;
            updateDisplay(input);
            break;
         case "button5":
            //operands.push(5);
            //updateDisplay(operands);
            input *= base;
            input += 5;
            updateDisplay(input);
             break;
        case "button6":
            //operands.push(6);
            //updateDisplay(operands);
            input *= base;
            input += 6;
            updateDisplay(input);
            break;
        case "button7":
            //operands.push(7);
            //updateDisplay(operands);
            input *= base;
            input += 7;
            updateDisplay(input);
            break;
        case "button8":
            //operands.push(8);
            //updateDisplay(operands);
            input *= base;
            input += 8;
            updateDisplay(input);
            break;
        case "button9":
            //operands.push(9);
            //updateDisplay(operands);
            input *= base;
            input += 9;
            updateDisplay(input);
            break;
        case "buttonClear":
            operands = [];
            history = [];
            updateDisplay(operands);
            updateHistoryDisplay(history);
            break;
        case "buttonClearEntry":
            operands = [];
            updateDisplay(operands);
            break;
        case "buttonBackspace":
            break;
        case "buttonAdd":
            if (history.length === 0) {
                history = history.concat(operands);
                history.push("+");
                updateHistoryDisplay(history);
                operands = [];
                updateDisplay(operands);
            }
            break;
        case "buttonSubtract":
            if (history.length === 0) {
                history = history.concat(operands);
                history.push("-");
                updateHistoryDisplay(history);
                operands = [];
                updateDisplay(operands);
            }
            break;
        case "buttonMultiply":
            if (history.length === 0) {
                history = history.concat(operands);
                history.push("×");
                updateHistoryDisplay(history);
                operands = [];
                updateDisplay(operands);
            }
            break;
        case "buttonDivide":
            if (history.length === 0) {
                history = history.concat(operands);
                history.push("÷");
                updateHistoryDisplay(history);
                operands = [];
                updateDisplay(operands);
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

function updateDisplay(output) {
    /*if (output.length === 0) {
        disp.innerHTML = "0";
    }
    else {
        disp.innerHTML = output.join("");
    }*/
    disp.innerHTML = output;
}

function updateHistoryDisplay(output) {
    histDisp.innerHTML = output.join("");
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
            result = substract(operands);
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

function substract() {
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