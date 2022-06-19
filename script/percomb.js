function percomb() {
    n = document.getElementById("upper").value;

    r = document.getElementById("lower").value;
    if (n <= -1 || r <= -1 || n == "" || r == "") {
        document.getElementById("perm").value = "Invalid input";
        document.getElementById("perm").style.color = "red";
        document.getElementById("perm").style.backgroundColor = "white";
        document.getElementById("comb").value = "Invalid input";
        document.getElementById("comb").style.color = "red";
        document.getElementById("comb").style.backgroundColor = "white";
        return;
    }

    x = fact(n) / fact(n - r);
    y = fact(n) / (fact(r) * fact(n - r));
    document.getElementById("perm").value = x;
    document.getElementById("perm").style.color = "blue";
    document.getElementById("comb").value = y;
    document.getElementById("comb").style.color = "blue";
}

function fact(n) {
    f = 1;
    for (i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}