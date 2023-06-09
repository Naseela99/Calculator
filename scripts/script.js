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
    num1 = Number(num1);
    num2 = Number(num2);
    if(op=='+'){

        return add(num1,num2).toString();

    }
    else if(op=='-'){

        return subtract(num1,num2).toString();
        
    }
    else if(op=='x'){

        return multiply(num1,num2).toString();

    }
    else if(op=='/'){

        return divide(num1,num2).toString();
        
    }
    else if(op=='%'){

        return amodulodd(num1,num2).toString();
        
    }
}


// Keep track of having 
let operand1 = '';
let operand2 = '';
let operator = '';


let n1 = false;
let n2 = false;
let op = false;

let decimal_n1 = false;
let decimal_n2 = false;


let op_btn = document.querySelectorAll('.btn-op');
let n_btn = document.querySelectorAll('.btn');
let dot_btn = document.querySelector('.btn-dot');

let eq_btn = document.querySelector('.btn-eq');

let out = document.querySelector('.output')

console.log(n_btn);

n_btn.forEach(item => item.addEventListener('click',numClick));

op_btn.forEach(item => item.addEventListener('click',opClick));

dot_btn.addEventListener('click',numClick);


eq_btn.addEventListener('click',eqClick);


function numClick(e){
    out.textContent+=e.target.textContent
    if(!n1){
        if (e.target.textContent=='.'){

            dot_btn.disabled = true;

        }
        operand1+=e.target.textContent
    }

    else if (!n2){
        if (e.target.textContent=='.'){

            dot_btn.disabled = true;

        }
        operand2+=e.target.textContent
    }

}

function opClick(e){

    


    if (op==true & n1 & n2){
        operand1 = operate(operand1,operand2,operator);
        operand2 = ''
        n2 = false
        operator = e.target.textContent
        out.textContent=`${operand1} ${e.target.textContent}`
        dot_btn.disabled = false;


    }

    else if (op==true & n1 & !n2 & operand2.length>0){
        
        operand1 = operate(operand1,operand2,operator);
        operand2 = ''
        operator = e.target.textContent
        out.textContent=`${operand1} ${e.target.textContent}`

    }
    else{

        if(operand1.length===0){
            return 
        }

        else if(operand1.length > 0 & !n1){
            n1 = true
            op=true
            operator =  e.target.textContent
            out.textContent=`${operand1} ${e.target.textContent}`
            dot_btn.disabled = false;


        }
        else{
            out.textContent+=` ${e.target.textContent}`


        }
    
        }

        // console.log(operand1,operand2,operator)
    }



function eqClick(e){
    if(n1 & n2 & op){
        operand1 = operate(operand1,operand2,operator);
        operand2 = ''
        n1=false
        n2=false
        operator = ''
        op=false
        dot_btn.disabled = false;

    }

    else if (n1 & op & operand2.length>0){
        operand1 = operate(operand1,operand2,operator);
        operand2 = ''
        n2=false
        n1=false
        operator = ''
        op=false;
        dot_btn.disabled = false;


    }

    else if (n1 & op & operand2.length==0){
        operator = ''


    }

    out.textContent=`${operand1}`

}

let dlt_btn = document.querySelector('.btn-dlt');
let clr_btn = document.querySelector('.btn-clr');

dlt_btn.addEventListener('click',deleteLast);
clr_btn.addEventListener('click',clearDisplay);

function deleteLast(e){
    
    if(operand2.length==0 & operator.length==0){
        operand1 = operand1.slice(0, -1);
        out.textContent = `${operand1}`;

    }
    else if(operator.length>0 & operand2.length==0 & operand1.length>0){

        operator= operator.slice(0, -1);
        out.textContent = `${operand1} ${operator}`;

    }
    else if(operator.length>0 & operand2.length>0 & operand1.length>0){
        operand2 = operand2.slice(0, -1);
        out.textContent = `${operand1} ${operator} ${operand2}`;
    }
}

function clearDisplay(e){

    out.textContent = '';
    n1=false;
    n2=false;
    op=false;
    dot_btn.disabled=false;
    operand1 =''
    operand2=''
    operator=''

}