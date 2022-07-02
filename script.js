let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

// programming buttons
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C': // clear calculator
                display.innerText = '';
                break
            case '←': // able to delete 1 number
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=': // built-in JS equals function
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});