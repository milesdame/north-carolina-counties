/*
* Takes in an array of counties
* Removes correctly county
* Returns the array minus the correctly guessed county
*/
export function removeCorrect(counties, guess) {
    // Get the index of the guessed county
    return counties.filter(county => county !== guess);
}

export function alreadyGuessed(guess) {
    console.log("MAKING IT HERE");
    let paragraph = document.createElement("p");
    paragraph.textContent = " Already Guessed " + guess + "!";
    paragraph.setAttribute("class", "already-guessed");
    document.getElementById("progress").appendChild(paragraph);

}

export function checkInput() {
    let attemptRaw = document.getElementById("textInput").value;
    console.log(attemptRaw);
    let attempt = attemptRaw.toLowerCase();
// each time the user types check the input value against the county list
    if (counties.includes(attempt) && !correctCounties.includes(attempt)) {
        console.log("YES");
        correctCounties.push(attempt);
        count++;
        playerEntries.push(attempt)
        document.getElementById("textInput").value = '';
        console.log(count);
        console.log(count.toString());
        let element = document.getElementById(attempt);
        let classes = element.classList;
        classes.add("correct");
        let total = document.createTextNode(count.toString());
        let textStr = "Total: " + total.toString() + "/100 guessed";
        let textNode = document.createTextNode(textStr);
        document.getElementById("total").textContent = "Total: " + count + "/100 guessed";
    } else if (correctCounties.includes(attempt)) {
      console.log("ALREADY GUESSED"); 
      alreadyGuessed(attempt);
      document.getElementById("textInput").value = '';
    }
}

