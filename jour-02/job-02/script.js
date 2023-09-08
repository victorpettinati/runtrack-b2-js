const countDisplayer = document.getElementById('count-displayer');
const addCountButton = document.getElementById('add-count-btn');

let count = 0;

function myAddCount() {
    count++;
    countDisplayer.textContent = count;
}

addCountButton.addEventListener('click', myAddCount);
