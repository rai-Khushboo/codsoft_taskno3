//javascaript code
let inputString = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        inputString = evaluateExpression(inputString);
        document.querySelector('input').value = inputString;
      } catch (error) {
        console.error('Error:', error.message);
        // Clear the input or display an error message as needed. 
        inputString = '';
        document.querySelector('input').value = 'Error';
      }
    } else if (e.target.innerHTML === 'C') {
      inputString = '';
      document.querySelector('input').value = inputString;
    } else {
      inputString += e.target.innerHTML;
      document.querySelector('input').value = inputString;
    }
  });
});

function evaluateExpression(expression) {
  return eval(expression);
}
