const inputNumber = document.querySelector("#showDiv");
const numberSeven = document.querySelector(".saven");


function changeNumber(value){

   inputNumber.value += value;
}

function videInpute(){
    inputNumber.value = '' ;
}

function multiplicar(){
    inputNumber.value *= value;
}

function theReuslt(){
    inputNumber.value = eval(inputNumber.value);
}