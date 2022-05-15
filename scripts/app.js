import {toMorseLetters} from "./data.js";
import {toEnglishLetters} from './data.js'


export const morseCodeTranslator = (input) => {
// const morseInputArray = input.split("");
// console.log(morseInputArray);
if(input.split("")[0] === "." || input.split("")[0] ==="/"){
    const morseInputArray = input.split(" ");
    let englishArray = morseInputArray.map(character => {
        return toEnglishLetters[character]
})
console.log(englishArray);
return englishArray.join(" ");
}
else {
const englishInputArray = input.split("");
console.log(englishInputArray);
    let morseArray = englishInputArray.map(character => {
        return toMorseLetters[character]
}
)
console.log(morseArray);
return morseArray.join(" ");
}
}

