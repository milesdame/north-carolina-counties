/*
* Takes in an array of counties
* Removes correctly county
* Returns the array minus the correctly guessed county
*/
export function removeCorrect(counties, guess) {
    // Get the index of the guessed county
    let index = counties.indexOf(guess);
    // Remove it
    let modifiedCounties = counties.splice(index, 1);
    // Return the modified array
    return modifiedCounties;
}

