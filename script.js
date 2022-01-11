getValues = function () {
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    
    resultvalue = {
        "number1": number1, "number2": number2
    }
    return resultvalue;
}
showResult = function(result){
    resultElement= document.getElementById("result");
    resultElement.innerText =result;
}
plusButton = document.getElementById("plusButton")
plusoperation = function () {

    sum = parseInt(number1.value) + parseInt(number2.value);
    numberValues = getValues();
   showResult(sum);
}

plusButton.addEventListener("click", plusoperation);
minusButton = document.getElementById("minusButton")
minusoperation = function () {

    numberValues = getValues();
    difference = parseInt(number1.value) - parseInt(number2.value);
    showResult(difference);
 
}
minusButton.addEventListener("click", minusoperation);
multiplyButton = document.getElementById("multiplyButton")
multiplyoperation = function () {

    numberValues = getValues();
    multiplication = parseInt(number1.value) * parseInt(number2.value);
    showResult(multiplication);
   
}
multiplyButton.addEventListener("click", multiplyoperation);

divisionButton = document.getElementById("divisionButton")
divideoperation = function () {

    numberValues = getValues();
    divide = parseInt(number1.value) / parseInt(number2.value);
    showResult(divide);
   
}
divisionButton.addEventListener("click", divideoperation);

