function nmr(val) {
    document.getElementById('userinput').value += val;
}

function clrall() {
    document.getElementById('userinput').value = "";
    document.getElementById('res').value = "";
}

function back() {
    var value = document.getElementById("userinput").value;
    document.getElementById("userinput").value = value.substr(0, value.length - 1);
}