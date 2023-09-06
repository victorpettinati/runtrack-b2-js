function myUppercase(string) {
    return string.toUpperCase();
}

function convertToUppercase() {
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');

    if (inputText) {
        const uppercaseText = myUppercase(inputText);
        resultElement.textContent = `Texte en majuscules : ${uppercaseText}`;
    } else {
        resultElement.textContent = 'Veuillez entrer du texte.';
    }
}
