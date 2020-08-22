let buttonPlus = document.getElementById('buttonPlus');

let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivision = document.getElementById('buttonDivision');

 function onButtonPlusClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    var number1 =  Number(input1.value);
    var number2 =  Number(input2.value);

  let sum = number1+number2;
    window.alert(sum);
}

function onButtonMinusClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    var number1 =  Number(input1.value);
    var number2 =  Number(input2.value);

  let sum = number1-number2;
    window.alert(sum);
}

function onButtonMultiplyClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    var number1 =  Number(input1.value);
    var number2 =  Number(input2.value);

  let sum = number1*number2;
    window.alert(sum);
}

function onButtonDivisionClick(){
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    var number1 =  Number(input1.value);
    var number2 =  Number(input2.value);

  let sum = number1/number2;
    window.alert(sum);
}

buttonPlus.addEventListener('click',onButtonPlusClick);
buttonMinus.addEventListener('click',onButtonMinusClick);
buttonMultiply.addEventListener('click',onButtonMultiplyClick);
buttonDivision.addEventListener('click',onButtonDivisionClick);
