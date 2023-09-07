function myIsInString(haystack, needle) {
    return haystack.indexOf(needle) !== -1;
}

const haystack = "Bonjour, comment ça va ?";
const needle = "comm";

const resultElement = document.getElementById("result");
const isFound = myIsInString(haystack, needle);

if (isFound) {
    resultElement.textContent = `"${needle}" a été trouvé dans "${haystack}".`;
} else {
    resultElement.textContent = `"${needle}" n'a pas été trouvé dans "${haystack}".`;
}