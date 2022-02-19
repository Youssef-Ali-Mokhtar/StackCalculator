const lowerScreen = document.getElementById('lower-screen-id');
const upperScreen = document.getElementById('upper-screen-id');

const addBtn = document.getElementById('add-button');
const subtractBtn = document.getElementById('subtract-button');
const multiplyBtn = document.getElementById('multiply-button');
const divideBtn = document.getElementById('divide-button');
const equalBtn = document.getElementById('equal-button');
const acBtn = document.getElementById('ac-button');
const decimalBtn = document.getElementById('decimal-button');

const oneBtn = document.getElementById('one-button');
const twoBtn = document.getElementById('two-button');
const threeBtn = document.getElementById('three-button');
const fourBtn = document.getElementById('four-button');
const fiveBtn = document.getElementById('five-button');
const sixBtn = document.getElementById('six-button');
const sevenBtn = document.getElementById('seven-button');
const eightBtn = document.getElementById('eight-button');
const nineBtn = document.getElementById('nine-button');
const zeroBtn = document.getElementById('zero-button');

function reset(){
    lowerScreen.textContent = "0";
    upperScreen.textContent = "";
}

addBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("+");
    addTextToUpperScreen("+");
});

subtractBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("-");
    addTextToUpperScreen("-");
});

multiplyBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("x");
    addTextToUpperScreen("x");
});

divideBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("/");
    addTextToUpperScreen("/");
});

equalBtn.addEventListener("click", ()=>{
    lowerScreen.textContent = calculatePostfix(infixToPostfix(stringToArrayEquation(upperScreen.textContent)));
});

decimalBtn.addEventListener("click", ()=>{
    addTextToLowerScreen(".");
    addTextToUpperScreen(".");
});

acBtn.addEventListener("click", reset);

zeroBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("0");
    addTextToUpperScreen("0");
});

oneBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("1");
    addTextToUpperScreen("1");
});

twoBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("2");
    addTextToUpperScreen("2");
});

threeBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("3");
    addTextToUpperScreen("3");
});

fourBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("4");
    addTextToUpperScreen("4");
});

fiveBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("5");
    addTextToUpperScreen("5");
});

sixBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("6");
    addTextToUpperScreen("6");
});

sevenBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("7");
    addTextToUpperScreen("7");
});

eightBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("8");
    addTextToUpperScreen("8");
});

nineBtn.addEventListener("click", ()=>{
    addTextToLowerScreen("9");
    addTextToUpperScreen("9");
});


