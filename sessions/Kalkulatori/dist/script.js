const calcOperation = document.querySelector('.calc-operation');
const calcTyped = document.querySelector('.calc-typed');
const buttonc = document.querySelector('.button c'); 

function youClicked(n){
    if(n === '='){
        if(calcOperation.textContent != ''){
            calcTyped.textContent = eval(calcOperation.textContent);
        }
    }
    else {
        calcOperation.textContent += n;
    }
}
