const buttons = document.querySelectorAll("button");
const disp = document.querySelector("#output");
const histDisp = document.querySelector("#history");
let history = "";
let input = 0;
const base = 10; // decimal
let operands = [];
let currentOperator;
let operandIndex = 0;
let temp = null;

buttons.forEach(button => {
    button.addEventListener("click", buttonPress);
});

function buttonPress() {
    let buttonClass = this.classList.value;
    let buttonId = this.id;
    console.log(operands);
    switch (buttonId) {
        case "button0":
            input *= base;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "button1":
            input *= base;
            input += 1;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "button2":
            input *= base;
            input += 2;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "button3":
            input *= base;
            input += 3;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "button4":
            input *= base;
            input += 4;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
         case "button5":
            input *= base;
            input += 5;
            disp.innerHTML = input;
            operands[operandIndex] = input;
             break;
        case "button6":
            input *= base;
            input += 6;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "button7":
            input *= base;
            input += 7;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "button8":
            input *= base;
            input += 8;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "button9":
            input *= base;
            input += 9;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "buttonClear":
            input = 0;
            operands = [];
            temp = null;
            operandIndex = 0;
            history = "";
            disp.innerHTML = input;
            histDisp.innerHTML = history;
            break;
        case "buttonClearEntry":
            input = 0;
            disp.innerHTML = input;
            //operands[operandIndex] = input;
            operands.pop;
            break;
        case "buttonBackspace":
            input -= (input % base);
            input /= base;
            disp.innerHTML = input;
            operands[operandIndex] = input;
            break;
        case "buttonAdd":
            input = 0;
            currentOperator = "+";
            operandIndex = 1;
            if (temp !== null) {
                disp.innerHTML = temp;
            }
            break;
        case "buttonSubtract":
            input = 0;
            currentOperator = "-";
            operandIndex = 1;
            if (temp !== null) {
                disp.innerHTML = temp;
            }
            break;
        case "buttonMultiply":
            input = 0;
            currentOperator = "*";
            operandIndex = 1;
            if (temp !== null) {
                disp.innerHTML = temp;
            }
            break;
        case "buttonDivide":
            input = 0;
            currentOperator = "/";
            operandIndex = 1;
            if (temp !== null) {
                disp.innerHTML = temp;
            }
            break;
        /*case "buttonAdd":
            if (history.length === 0) {
                history = `${input} + `;
                histDisp.innerHTML = history;
                operands.push(input);
                input = 0;
            }
            else {
                history += `${input} + `;
                histDisp.innerHTML = history;
                operands.push(input);
                let temp = operate("+", operands[0], operands[1]);
                operands = [temp];
                input = 0;
                disp.innerHTML = temp;
            }
            break;
        case "buttonSubtract":
            if (history.length === 0) {
                history = `${input} - `;
                histDisp.innerHTML = history;
                operands.push(input);
                input = 0;
            }
            else {
                history += `${input} - `;
                histDisp.innerHTML = history;
                operands.push(input);
                let temp = operate("-", operands[0], operands[1]);
                operands = [temp];
                input = 0;
                disp.innerHTML = temp;
            }
            break;
        case "buttonMultiply":
            if (history.length === 0) {
                history = `${input} × `;
                histDisp.innerHTML = history;
                operands.push(input);
                input = 0;
            }
            else {
                history += `${input} × `;
                histDisp.innerHTML = history;
                operands.push(input);
                let temp = operate("*", operands[0], operands[1]);
                operands = [temp];
                input = 0;
                disp.innerHTML = temp;
            }
            break;
        case "buttonDivide":
            if (history.length === 0) {
                history = `${input} ÷ `;
                histDisp.innerHTML = history;
                operands.push(input);
                input = 0;
            }
            else {
                history += `${input} ÷ `;
                histDisp.innerHTML = history;
                operands.push(input);
                let temp = operate("/", operands[0], operands[1]);
                operands = [temp];
                input = 0;
                disp.innerHTML = temp;
            }
            break;*/
        case "buttonEquals":
            break;
        case "buttonDecimal":
            break;
        case "buttonSign":
            break;
    }
    if (operands.length === 2) {
        //let temp;
        switch (currentOperator) {
            case "+":
                temp = operate("+", operands[0], operands[1]);
                operands = [temp];
                operandIndex = 0;
                //input = 0;
                //disp.innerHTML = temp;
                break;
            case "-":
                temp = operate("-", operands[0], operands[1]);
                operands = [temp];
                operandIndex = 0;
                //input = 0;
                //disp.innerHTML = temp;
                break;
            case "*":
                temp = operate("*", operands[0], operands[1]);
                operands = [temp];
                operandIndex = 0;
                //input = 0;
                //disp.innerHTML = temp;
                break;
            case "/":
                temp = operate("/", operands[0], operands[1]);
                operands = [temp];
                operandIndex = 0;
                //input = 0;
                //disp.innerHTML = temp;
                break;
        }
    }
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