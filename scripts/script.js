function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}
function modulo(a,b){
    return a%b;
}


function operate(num1,num2,op){
    if(op=='+'){

        return add(num1,num2);

    }
    else if(op=='-'){

        return subtract(num1,num2);
        
    }
    else if(op=='x'){

        return multiply(num1,num2);

    }
    else if(op=='/'){

        return divide(num1,num2);
        
    }
    else if(op=='%'){

        return amodulodd(num1,num2);
        
    }
}

console.log(add(4,5));
console.log(subtract(4,5));
console.log(multiply(4,5));
console.log(divide(4,5));
console.log(modulo(16,5));

console.log(operate(4,5,'x'))

