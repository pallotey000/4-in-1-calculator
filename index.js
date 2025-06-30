function Addition(event) {
    event.preventDefault();
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let solution = parseInt(num1) + parseInt(num2);
      
    document.getElementById("solution").innerHTML = `Addition_Answer = ${solution}`;
}

function clearvalues() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("solution").innerHTML = "";
}
//SUBTRACTION
function subtraction(event) {
    event.preventDefault();
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let solution = parseInt(num1) -  parseInt(num2);
    document.getElementById("Result").innerHTML = `Subtraction_Answer = ${solution}`;
}

function clearvalues() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("solution").innerHTML = "";
}
//MULTIPLICATION
function multiplication(event) {
    event.preventDefault();
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let solution = parseInt(num3) *  parseInt(num4);
    document.getElementById("Answer").innerHTML = `Multiplication_Answer = ${solution}`;
}

function clearvalues() {
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("solution").innerHTML = "";
}
//DIVISION
function Division(event) {
    event.preventDefault();
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    let solution = parseInt(num5) /  parseInt(num6);
    document.getElementById("result").innerHTML = `Division_Answer = ${solution}`;
}

function clearvalues() {
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    document.getElementById("solution").innerHTML = "";
}
