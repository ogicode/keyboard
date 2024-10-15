const keys = document.querySelectorAll(".key");
const textInput = document.getElementById("textInput");

keys.forEach(key => {
    key.addEventListener("click", function() {
        if (this.innerText === "Space") {
            textInput.value += " ";
        } else if (this.innerText === "Backspace") {
            textInput.value = textInput.value.slice(0, -1);
        } else {
            textInput.value += this.innerText;
        }
    });
});
