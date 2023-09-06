function myCountChar(haystack, needle) {
    let count = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.charAt(i) === needle) {
            count++;
        }
    }
    return count;
}

function countCharacter() {
    const inputText = document.getElementById('inputText').value;
    const charToCount = document.getElementById('charToCount').value;
    const resultElement = document.getElementById('result');

    if (inputText && charToCount && charToCount.length === 1) {
        const count = myCountChar(inputText, charToCount);
        resultElement.textContent = `Le caractère "${charToCount}" apparaît ${count} fois dans la chaîne de caractères.`;
    } else {
        resultElement.textContent = 'Veuillez entrer une chaîne de caractères et un caractère (un seul caractère) à compter.';
    }
}
