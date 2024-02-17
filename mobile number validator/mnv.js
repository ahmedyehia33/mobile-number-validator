const numberInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

// Phone numbers valid forms
const regI = /^1 \d{3}-\d{3}-\d{4}$/;
const regII = /^1 (\(\d{3}\)|\d{3})-\d{3}-\d{4}$/;
const regIII = /^1 ?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
const regIV = /^1 ?(\d{3}[-\s]?\d{3}[-\s]?\d{4}|\(\d{3}\)[-?\s]?\d{3}[-\s]?\d{4})$/;
const regV = /^(\d{3}[-\s]?\d{3}[-\s]?\d{4})$/;
const regVI = /^(\(\d{3}\)[-?\s]?\d{3}[-\s]?\d{4})$/;

const valid = [regI, regII, regIII, regIV, regV, regVI];

const phoneCheck = () => {
    const inputValue = numberInput.value.trim();

    if (inputValue === "") {
        window.alert('Please provide a phone number');
        return;
    }

    let isValid = false;

    for (const regex of valid) {
        if (regex.test(inputValue)) {
            isValid = true;
            break;
        }
    }

      const resultMessage = isValid
        ? `<div class="valid-message">Valid US number: ${inputValue}</div>`
        : `<div class="invalid-message">Invalid US number: ${inputValue}</div>`;

   
    result.innerHTML += resultMessage;

};

const clearScreen = () => {
    numberInput.value = "";
    result.innerHTML = "";
};

checkBtn.addEventListener('click', phoneCheck);
clearBtn.addEventListener('click', clearScreen);