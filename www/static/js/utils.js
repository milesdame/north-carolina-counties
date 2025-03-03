
function capFirst(word) {
    let firstLetter = word.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    const remainingChars = word.slice(1);
    let capitalized = firstLetterCap + remainingChars;

    return capitalized;
}
/*
// Function for changing the theme
function changeTheme(theme) {
    // Update the theme in session storage
    sessionStorage.setItem("theme", theme);

    // Update the theme link in the head
    // Create theme url
    let themePath = "static/css/" + theme;
    let themeLink = Document.getElementById("theme-style");
    themeLink.setAttribute("href", themePath);
    return true; 
}
*/
