const textDisplayer = document.getElementById('text-displayer');
const inputText = document.getElementById('input-text');
const turnTextBoldButton = document.getElementById('turn-text-bold');
const turnTextItalicButton = document.getElementById('turn-text-italic');
const turnTextUnderlineButton = document.getElementById('turn-text-underline'); 
const clearTextButton = document.getElementById('clear-text');


function myDisplayText() {
    const inputValue = inputText.value;
    textDisplayer.textContent = inputValue;
}

function myTurnBold() {
    textDisplayer.style.fontWeight = 'bold';
    textDisplayer.style.fontStyle = 'normal';
}

function myTurnItalic() {
    textDisplayer.style.fontStyle = 'italic';
    textDisplayer.style.fontWeight = 'normal';
}

function myClearText() {
    textDisplayer.textContent = '';
    textDisplayer.style.fontWeight = 'normal';
    textDisplayer.style.fontStyle = 'normal';
}

function myTurnUnderline() {
    textDisplayer.style.textDecoration = 'underline';

}

inputText.addEventListener('input', myDisplayText);
turnTextBoldButton.addEventListener('click', myTurnBold);
turnTextItalicButton.addEventListener('click', myTurnItalic);
turnTextUnderlineButton.addEventListener('click', myTurnUnderline);
clearTextButton.addEventListener('click', myClearText);
