function myArraySum(array) {
    return array.reduce((acc, current) => acc + current, 0);
}

const numbers = [7, 15, 17, 18, 29];
const sum = myArraySum(numbers);

const resultElement = document.getElementById("result");
resultElement.textContent = `La somme des éléments du tableau est : ${sum}`;
