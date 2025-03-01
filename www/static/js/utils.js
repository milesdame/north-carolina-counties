
function capFirst(word) {
    let firstLetter = word.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    const remainingChars = word.slice(1);
    let capitalized = firstLetterCap + remainingChars;

    return capitalized;
}

function removeCorrect() {
    
}