// Filename: calculator.js
const operation = process.argv[2]
const num1 = parseFloat(process.argv[3])
const num2 = parseFloat(process.argv[4])

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero'
    }
    return a / b
}

switch (operation) {
    case 'add':
        console.log(add(num1, num2))
        break
    case 'subtract':
        console.log(subtract(num1, num2))
        break
    case 'multiply':
        console.log(multiply(num1, num2))
        break
    case 'divide':
        console.log(divide(num1, num2))
        break
    default:
        console.log('Invalid operation')
}
