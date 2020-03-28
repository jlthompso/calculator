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