function calculate(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("oprn").value;
    var result;
    if(operation == '+') result = num1 + num2; 
    else if(operation == '-') result = num1 - num2;
    else if(operation == '*') result = num1 * num2;
    else if(operation == '/') result = num1 / num2;
    else result = "invalid operation!";
    document.getElementById("result").innerHTML = "The result is: " + result;
}