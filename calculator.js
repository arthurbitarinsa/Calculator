

const calculator = document.getElementById('calculator');

// Create calculator display
const display = document.createElement('div');
display.classList.add('calculator-display');
calculator.appendChild(display);

// Create history display
const historyDisplay = document.createElement('div');
historyDisplay.classList.add('calculator-display');
historyDisplay.style.fontSize = '14px';
calculator.appendChild(historyDisplay);

// Create buttons
const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', 'x',
    '1', '2', '3', '-',
    'C', '0', '=', '+'
];

buttons.forEach(buttonValue => {
    const button = document.createElement('button');
    button.textContent = buttonValue;
    button.classList.add('calculator-button');
    calculator.appendChild(button);

    button.addEventListener('click', () => {
        if (buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === '=') {
            calculateResult();
        } else {
            updateDisplay(buttonValue);
        }
    });
});

let history = '';
let currentOperation = '';

function updateDisplay(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '';
    historyDisplay.textContent = '';
    history = '';
    currentOperation = '';
}

function calculateResult() {
    history += display.textContent + ' = ';
    try {
        const result = eval(display.textContent);
        display.textContent = result;
        history += result;
    } catch (error) {
        display.textContent = 'Error';
        history += 'Error';
    }
    historyDisplay.textContent = history;
}
