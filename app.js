
// import functions and grab DOM elements
import { add, minus, multiply, divide, toNumber } from './calculator.js';

//all 
function calc(input1Id, input2Id, buttonId, displayId, operation) {
    const input1 = document.getElementById (input1Id);
    const input2 = document.getElementById (input2Id);
    const button = document.getElementById (buttonId);
    const resultDisplay = document.getElementById (displayId);

    button.addEventListener('click', () =>{
        const x = toNumber(input1);
        const y = toNumber(input2);
        const result = operation(x, y);
        resultDisplay.textContent = result;
        input1.value = '';
        input2.value = '';
    });

}

//add
calc('addition1-input', 'addition2-input', 'addition-button', 'addition-result', add);

//minus
calc('subtraction1-input', 'subtraction2-input', 'subtraction-button', 'subtraction-result', minus);

//multiply
calc('multiply1-input', 'multiply2-input', 'multiply-button', 'multiply-result', multiply);

//divide
calc('divide1-input', 'divide2-input', 'divide-button', 'divide-result', divide);


