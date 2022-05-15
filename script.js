function nmr(val) {
    document.getElementById('userinput').value += val;
}

function eqn() {

    var value1 = document.getElementById('userinput').value;

    var res = eval(value1);

    document.getElementById('res').value = res;
}

function clrall() {
    document.getElementById('userinput').value = "";
    document.getElementById('res').value = "0";
}

function back() {
    var value = document.getElementById("userinput").value;
    document.getElementById("userinput").value = value.substr(0, value.length - 1);
}