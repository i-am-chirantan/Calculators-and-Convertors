function isOperator(a) {
    if (a == '+' || a == '-' || a == '*' || a == '/' || a == '%' || a == '^') {
        return true;
    }
    return false;
}

function nmr(val, input) {
    var prev = document.getElementById(input).value;
    if (prev.length > 0 && isOperator(prev.charAt(prev.length - 1)) && isOperator(val)) {
        document.getElementById(input).value = prev.substr(0, prev.length - 1) + val;
        return;
    }
    document.getElementById(input).value = prev + val;
    document.getElementById(input).style.color = "black";

}

function clrall(input, val, bgcolor = "white") {
    document.getElementById(input).value = val;
    document.getElementById(input).style.color = "black";
    document.getElementById(input).style.backgroundColor = bgcolor;
}

function back(input) {
    var value = document.getElementById(input).value;
    document.getElementById(input).value = value.substr(0, value.length - 1);
}