function calc1() {
    var a = document.getElementById("I0").value;
    var b = document.getElementById("I1").value;
    if (a == "" || b == "") {
        alert("Please fill in all the fields");
        return;
    }
    document.getElementById("out1").innerHTML = a * b / 100;
    document.getElementById("out1").style.color = "white";
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
    document.getElementById("out2").style.color = "white";
}

function calc3() {
    var a = document.getElementById("I4").value;
    var b = document.getElementById("I5").value;
    var c = document.getElementById("cars").value;
    if (a == "" || b == "") {
        alert("Please fill in all the fields");
        return;
    }
    if (c == "+") {
        var res = (+b + +parseFloat((a * 100) / b));
    } else {
        var res = +b - +parseFloat((a * 100) / b);
    }
    document.getElementById("out3").innerHTML = res;
    document.getElementById("out3").style.color = "white";
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