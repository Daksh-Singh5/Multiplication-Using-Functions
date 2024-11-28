function calculate() {
    var getvalue = document.getElementById("number1").value;
    var getvalue2 = document.getElementById("number2").value;

    var result = Number(getvalue) * Number(getvalue2);

    document.write("<br>"+"Your answer is: " + result);
}