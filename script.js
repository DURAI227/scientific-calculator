let result = document.getElementById('result');

function appendNumber(num) {
    result.value += num;
}

function appendOperator(op) {
    result.value += op;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value.replace('%', '/100'));
    } catch {
        result.value = 'Error';
    }
}
// ...existing code...

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
        event.preventDefault();
    } else if (key === 'Backspace') {
        result.value = result.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearResult();
    } else if (key === '%') {
        appendOperator('%');
    }
    // Add more key mappings for scientific functions if needed
});
function scientificFunction(func) {
    let value = parseFloat(result.value);
    switch (func) {
        case 'sin':
            result.value = Math.sin(value * Math.PI / 180);
            break;
        case 'cos':
            result.value = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            result.value = Math.tan(value * Math.PI / 180);
            break;
        case 'log':
            result.value = Math.log10(value);
            break;
        case 'sqrt':
            result.value = Math.sqrt(value);
            break;
        case 'pow':
            result.value = Math.pow(value, 2);
            break;
        case 'pi':
            result.value += Math.PI;
            break;
        case 'exp':
            result.value = Math.exp(value);
            break;
        default:
            break;
    }
}
function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}  