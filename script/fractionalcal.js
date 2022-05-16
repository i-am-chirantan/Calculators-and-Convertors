function eval() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);

    sign = document.getElementById('sign').value;
    if (c == 0 || d == 0) {
        document.getElementById('num').innerHTML = "Denominator cannot be zero";
        document.getElementById('denom').innerHTML = "";
        document.getElementById('num').style.color = "Red";

    } else if (sign == '+') {
        num = (a * d) + b * c;
        denom = c * d;
        k = gcd(num, denom);
        num = num / k;
        denom = denom / k;
        document.getElementById('num').innerHTML = num;
        document.getElementById('denom').innerHTML = denom;

    } else if (sign == '-') {
        num = (a * d) - b * c;
        denom = c * d;
        k = gcd(num, denom);
        num = num / k;
        denom = denom / k;
        document.getElementById('num').innerHTML = num;
        document.getElementById('denom').innerHTML = denom;

    } else if (sign == '*') {
        num = a * b;
        denom = c * d;
        k = gcd(num, denom);
        num = num / k;
        denom = denom / k;
        document.getElementById('num').innerHTML = num;
        document.getElementById('denom').innerHTML = denom;

    } else if (sign == '/') {
        const t = b;
        b = d;
        d = t;
        num = a * b;
        denom = c * d;
        k = gcd(num, denom);
        num = num / k;
        denom = denom / k;
        document.getElementById('num').innerHTML = num;
        document.getElementById('denom').innerHTML = denom;
    }
}

function clr() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('d').value = '';
}

function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}