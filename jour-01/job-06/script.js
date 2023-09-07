function mySquareArray(array) {
    return array.map((number) => number * number);
}

function calculateSquareArray() {
    const inputArrayElement = document.getElementById("inputArray");
    const resultElement = document.getElementById("result");

    const inputString = inputArrayElement.value;
    const numbers = inputString.split(",").map((str) => parseFloat(str.trim()));

    if (numbers.some(isNaN)) {
        resultElement.textContent = "Invalid input. Please enter a list of numbers separated by commas.";
    } else {
        const squaredNumbers = mySquareArray(numbers);
        resultElement.textContent = "Squared Numbers: " + squaredNumbers.join(", ");
    }
}
