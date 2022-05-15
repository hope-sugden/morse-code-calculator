import {morseCodeTranslator} from "./app.js"

const input = document.getElementById("translate-box");
const output = document.getElementById("output");
const button = document.getElementById("button");



button.addEventListener("click", (event) => {
    event.preventDefault();
    return output.innerHTML = morseCodeTranslator(input.value);
})