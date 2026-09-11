// *variables
const nameInput = document.getElementById('firstName');
const lastInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const textArea = document.getElementById('text-Area');
const checkBoxes = document.querySelectorAll('.query-option input[type="radio"]');
const consentBox = document.getElementById('checkbox');
const radioDiv = document.querySelector('label[for="radio-One"] .form-flex');
const form = document.querySelector('form');
const overlay = document.getElementById('overlay-container');

//* validators
const nameValidation = () => /^[a-zA-Z]+$/.test(nameInput.value);
const lastValidation = () => /^[a-zA-Z]+$/.test(lastInput.value);
const emailValidation = () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value);
const textAreaValidation = () => /^[a-zA-Z0-9\s.,!?'"()]+$/.test(textArea.value);
const isChecked = (option) => {
    let checkBox = false;
    option.forEach((item) => {
        if(item.checked) {
            checkBox = true;
        } 
    }) 
    return checkBox 
}

//* error Function
const writeError = (validator, input) => {
    const borderStyle = input;
    const errorSpan = input.nextElementSibling;
    if(!validator) {
        if( borderStyle.className.includes('form-flex')) {
            borderStyle.style.border = 'none';
            borderStyle.style.color = 'black';
        }
        if(borderStyle) {
            borderStyle.classList.add('border-red');
            borderStyle.classList.add('error');
            errorSpan.classList.add('error');
        }
    } else if(validator) {
        if(borderStyle) {
            borderStyle.classList.remove('border-red');
            borderStyle.classList.remove('error');
            errorSpan.classList.remove('error');
        }
    }
    return validator;
}

//* event listener */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validations = [
        writeError(nameValidation(), nameInput),
        writeError(lastValidation(), lastInput),
        writeError(emailValidation(), emailInput),
        writeError(isChecked(checkBoxes), radioDiv),
        writeError(textAreaValidation(), textArea),
        writeError(consentBox.checked, consentBox)
    ];
    overlay.style.display =validations.every((validation) => validation )
    ? 'block'
    : 'none'
});