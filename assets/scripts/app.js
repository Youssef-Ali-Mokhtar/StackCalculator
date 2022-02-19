
function addition(num1, num2){
    return num1+num2;
}

function subtraction(num1, num2){
    return num1-num2;
}

function multiplication(num1, num2){
    return num1*num2;
}

function division(num1, num2){
    return num1/num2;
}

//This function adds input to the lower screen
function addTextToLowerScreen(input){
    if(lowerScreen.textContent === "0"){
        if(input === "."){
            lowerScreen.textContent += input;
        }else{
            lowerScreen.textContent = input;
        }
    }else{
        if(operand(lastChar(lowerScreen.textContent))){
            if(operand(input)){
                lowerScreen.textContent += input;
            }else if(operator(input)){
                lowerScreen.textContent = input;
            }else if(input === "." && !containsDecimal(lowerScreen.textContent)){
                lowerScreen.textContent += input;
            }
        }else if(operator(lastChar(lowerScreen.textContent))){
            if(operator(input)){
                lowerScreen.textContent = input;
            }else if(operand(input)){
                lowerScreen.textContent = input;
            }else if(input === "."){

            }
        }else if(lastChar(lowerScreen.textContent) === "."){
            if(operator(input)){

            }else if(operand(input)){
                lowerScreen.textContent += input;
            }else if(input === "."){

            }
        }
        
    }
}
//This function adds input to the upper screen
function addTextToUpperScreen(input){
    if(upperScreen.textContent.length === 0){
        if(operand(input)){
            upperScreen.textContent = input;
        }else if(operator(input)){
            upperScreen.textContent = "0" + input;
        }else if(input === "."){
            upperScreen.textContent = "0" + input;
        }
    }else{

        if(operand(lastChar(upperScreen.textContent))){
            if(operator(input)){
                upperScreen.textContent += input;
            }else if(operand(input)){
                if(getNumAfterLastOperator(upperScreen.textContent) === "0"){
                    // do nothing
                }else{
                    upperScreen.textContent += input;
                }
            }else if(input === "." && !containsDecimal(getNumAfterLastOperator(upperScreen.textContent))){ 
                upperScreen.textContent += input;
            }

        }else if(operator(lastChar(upperScreen.textContent))){
            if(operator(input)){
                upperScreen.textContent = replaceLastChar(upperScreen.textContent, input);
            }else if(operand(input)){
                upperScreen.textContent += input;
            }else if(input === "."){
                //Do nothing
            }

        }else if(lastChar(upperScreen.textContent) === "."){
            if(operator(input)){
            }else if(operand(input)){
                upperScreen.textContent += input;
            }else if(input === "."){
                //Do nothing
            }
        }

    }
}

// To check if the argument is an operand (number)
function operand(input){
    if((input>"9") || (input<"0")){
        return false;
    }
    return true;
}

function reverseString(input){
    let reversed = "";
    for(let i=input.length-1;i>=0;i--){
        reversed += input.charAt(i);
    }
    return reversed;
}

function lastChar(input){
    return  input.charAt(input.length-1);
}

function getNumAfterLastOperator(input){
    if(input.length === 0){
        return ;
    }
    let text = "";
    let i = input.length-1;
    while(!operator(input.charAt(i)) && i>=0){
        text += input.charAt(i);
        i--;
    }
    return reverseString(text);
}

function replaceLastChar(text, input){
    if(text.length>0){
        return text.substring(0, text.length-1) + input;
    }
    return input;
}

function operator(input){
    if(input === "+" ||
       input === "-" ||
       input === "/" ||
       input === "x"){
        return true;
    }
    else false;
}

function numberAfterLastOperand(input){
    num = "";
    for(i=0; i<input.length; i++){
        if(!operator(input.charAt(i))){
            num += input.charAt(i);
        }else{
            num = "";
        }
    }
    return num;
}

function containsDecimal(input){
    if(input.includes(".")){
        return true;
    }
    return false;
}


function stringToArrayEquation(input){
    let arr = [];
    let i = 0;
    while(i<input.length){
        let subString = "";
        while(!operator(input.charAt(i)) && i<input.length){
            subString+=input.charAt(i);
            i++;
        }
        arr.push(subString);
        if(i > input.length-1){
            break;
        }
        arr.push(input.charAt(i));
        i++;
    }

    return arr;
}


function infixToPostfix(input){
    let exp = new Stack();

    let postfix = [];
    for(let i=0;i<input.length;i++){
        if(!operator(input[i])){
            postfix.push(input[i]);
        }else if(operator(input[i])){
            while(!exp.isEmpty() && hasHigherPrec(exp.peek(), input[i])){
                postfix.push(exp.pop());  
            }
            exp.push(input[i]);
        }
    }
    while(!exp.isEmpty()){
        postfix.push(exp.pop());
    }

    return postfix;
}


function hasHigherPrec(input1, input2){
    if((input1 === "x" || input1 === "/") && (input2 === "+" || input2 === "-") ||
    (input1 === "+" || input1 === "-") && (input2 === "+" || input2 === "-")){
        return true;
    }
    else false;
}

function calculatePostfix(input){
    let s = new Stack();
    for(let i=0;i<input.length;i++){
        let operand1="";
        let operand2="";
        let result="";
        if(!operator(input[i])){
            s.push(input[i]);
        }else if(operator(input[i])){
            operand2 = s.pop();
            operand1 = s.pop();
            result = calculate(input[i],operand1,operand2);
            s.push(result);
        }
    }
    return s.peek();
}

function calculate(operator, operand1, operand2){
    let result = 0;
    if(operator === "+"){
        result = addition(Number(operand1), Number(operand2));
    }else if(operator === "-"){
        result = subtraction(Number(operand1), Number(operand2));
    }else if(operator === "x"){
        result = multiplication(Number(operand1), Number(operand2));
    }else if(operator === "/"){
        result = division(Number(operand1), Number(operand2));
    }
    return result.toString();
}
