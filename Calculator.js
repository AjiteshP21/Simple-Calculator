let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});
document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '=', 'AC', 'DEL'];

    if (allowedKeys.includes(key)) {
        e.preventDefault(); 
        handleButtonClick(key);
    }
});

function handleButtonClick(value) {
    switch (value) {
        case '=': 
            string = eval(string);
            input.value = string;
            break;
        case 'AC':
            string = "";
            input.value = string;
            break;
        case 'DEL':
            string = string.slice(0, -1);
            input.value = string;
            break;
        default: 
            string += value;
            input.value = string;
            break;
    }

}