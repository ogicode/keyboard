const keys = document.querySelectorAll(".key");
const textInput = document.getElementById("textInput");
const languageToggle = document.getElementById("languageToggle");

let language = 'en'; // Default to English

const englishKeys = {
    row1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    row2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    row3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
};

const germanKeys = {
    row1: ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'Ö', 'P'],
    row2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    row3: ['Y', 'X', 'C', 'V', 'B', 'N', 'M']
};

function updateKeyboard() {
    const row1 = Array.from(document.getElementById('row1').children);
    const row2 = Array.from(document.getElementById('row2').children);
    const row3 = Array.from(document.getElementById('row3').children);

    if (language === 'en') {
        row1.forEach((key, index) => key.innerText = englishKeys.row1[index]);
        row2.forEach((key, index) => key.innerText = englishKeys.row2[index]);
        row3.forEach((key, index) => key.innerText = englishKeys.row3[index]);
    } else {
        row1.forEach((key, index) => key.innerText = germanKeys.row1[index]);
        row2.forEach((key, index) => key.innerText = germanKeys.row2[index]);
        row3.forEach((key, index) => key.innerText = germanKeys.row3[index]);
    }
}

languageToggle.addEventListener('click', function () {
    if (language === 'en') {
        language = 'de';
        languageToggle.innerText = 'Switch to English';
    } else {
        language = 'en';
        languageToggle.innerText = 'Switch to German';
    }
    updateKeyboard();
});

keys.forEach(key => {
    key.addEventListener("click", function () {
        if (this.innerText === "Space") {
            textInput.value += " ";
        } else if (this.innerText === "Backspace") {
            textInput.value = textInput.value.slice(0, -1);
        } else {
            textInput.value += this.innerText;
        }
    });
});
