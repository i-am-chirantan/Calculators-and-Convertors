function prcal() {
    sig = document.getElementById("sigf").value;
    var a = new Array(9),
        b = new Array(9);
    for (i = 1; i <= 8; i++) {
        a[i] = document.getElementById("a" + i).value;
        b[i] = document.getElementById("b" + i).value;
        document.getElementById("outa" + i).value = a[i];
        document.getElementById("outb" + i).value = b[i];
    }

    for (var i = 1; i <= 8; i++) {
        if (a[i] == "" || b[i] == "") {
            document.getElementById("outa" + i).value = 0;
            document.getElementById("outb" + i).value = 0;
            document.getElementById("outc" + i).value = "";
            continue;
        }
        x = ((a[i] - b[i]) / a[i]) * 100;
        str = Math.abs(x.toPrecision(sig)) + "%";
        if (parseFloat(a[i]).toPrecision(sig) > parseFloat(b[i]).toPrecision(sig)) {
            str += "decrease";
        } else if (parseFloat(a[i]).toPrecision(sig) < parseFloat(b[i]).toPrecision(sig)) {
            str += "increase";
        } else {
            str = "no change";
        }
        document.getElementById("outc" + i).value = str;
    }
}