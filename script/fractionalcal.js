function submit1() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var op = document.getElementById("oper1").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    if (a == "" || b == "" || c == "" || d == "") {
        alert("Please fill all the fields");
        return;
    }
    if (c == 0 || d == 0) {
        document.getElementById("w1").innerHTML = "Invalid";
        document.getElementById("w1").style.color = "red";
        document.getElementById("w2").innerHTML = "Input";
        document.getElementById("w2").style.color = "red";
        return;
    }
    if (op == "+") {
        var denom = c * d;
        var num = ((denom / c) * a) + ((denom / d) * b);
        fill1(num, denom);
    }
    if (op == "-") {
        var denom = c * d;
        var num = ((denom / c) * a) - ((denom / d) * b);
        fill1(num, denom);
    }
    if (op == "*") {
        var denom = c * d;
        var num = a * b;
        fill1(num, denom);
    }
    if (op == "/") {
        var denom = b * c;
        var num = a * d;
        fill1(num, denom);
    }
}

function submit3() {
    var c = document.getElementById("dec").value;
    len = c.toString().length;
    var dot = (c.toString()).indexOf('.') + 1;
    if (c == "") {
        alert("Please fill all the fields");
        return;
    }

    var denom = 10 ** (len - dot);
    var num = c * denom;
    var k = gcd(num, denom); // 17/3 5 2/3
    num = num / k;
    denom = denom / k;
    if (num > denom) {
        var f = Math.trunc(num / denom);
        num = num - (f * denom);
        document.getElementById("y0").value = f;
        document.getElementById("y0").style.color = "Green";
    }
    document.getElementById("y1").value = num;
    document.getElementById("y1").style.color = "Green";
    document.getElementById("y2").value = denom;
    document.getElementById("y2").style.color = "Green";
}

function submit4() {
    var a = document.getElementById("func1").value;
    var b = document.getElementById("func2").value;
    if (a == "") {
        alert("Please fill all the fields");
        return;
    }
    if (b == "") {
        b = 1;
    }
    if (b == 0) {
        document.getElementById("w1").innerHTML = "Invalid Input";
        document.getElementById("w1").style.color = "red";
    }
    document.getElementById("z1").value = a / b;
    document.getElementById("z1").style.color = "Green";
}

function gcd(a, b) {
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}

function fill1(num, denom) {
    var k = gcd(num, denom);
    num = num / k;
    denom = denom / k;
    document.getElementById("decimal").value = "Result in Decimal=" + (num / denom);
    document.getElementById("w1").value = num;
    document.getElementById("w1").style.color = "Green";
    document.getElementById("w2").value = denom;
    document.getElementById("w2").style.color = "Green";
}