let display = document.getElementById('display');

function appendToDispaly(value) {
    // Clear display
    if (value === 'clr') {
        display.value = '';
        return;
    }

    // Delete last character
    if (value === 'DEL') {
        display.value = display.value.toString().slice(0, -1);
        return;
    }

    // Append value to display
    display.value += value;
}

function calculate() {
    try {
        // Get the current value from display
        const expression = display.value;

        // Check if expression is empty
        if (expression === '') {
            alert('Please enter a calculation');
            return;
        }

        // Evaluate the expression
        const result = eval(expression);

        // Display the result
        display.value = result;
    } catch (error) {
        // Handle errors
        alert('Invalid expression');
        display.value = '';
    }
}


let display