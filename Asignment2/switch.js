function calculator(a, b, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";
    }
    return result;
}


console.log(calculator(10, 5, 'add'));      
console.log(calculator(10, 5, 'divide'));   
