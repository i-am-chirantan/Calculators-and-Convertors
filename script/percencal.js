function calc1() {
    var a = document.getElementById("I0").value;
    var b = document.getElementById("I1").value;
    if (a == "" || b == "") {
        alert("Please fill in all the fields");
        return;
    }
    document.getElementById("out1").innerHTML = a * b / 100;
}

function calc2() {
    var a = document.getElementById("I2").value;
    var b = document.getElementById("I3").value;
    if (a == "" || b == "") {
        alert("Please fill in all the fields");
        return;
    }
    c = max(a, b);
    d = min(a, b);
    percent = (abs(c - d) * 100) / d;
    console.log(percent);
    document.getElementById("out2").innerHTML = c + " is " + percent + " % " + " of " + d;
}

function calc3() {
    var a = document.getElementById("I4").value;
    var b = document.getElementById("I5").value;
    var c = document.getElementById("cars").value;
    if (a == "" || b == "") {
        alert("Please fill in all the fields");
        return;
    }
    if (c == "+") { // 5 100
        var res = (+b + +parseFloat((a * 100) / b));
    } else {
        var res = +b - +parseFloat((a * 100) / b);
    }
    console.log(typeof(res));
    document.getElementById("out3").innerHTML = res;
}

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

function abs(a) {
    if (a < 0) {
        return -a;
    }
    return a;
}