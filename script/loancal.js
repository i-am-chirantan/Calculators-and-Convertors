function loancal() {
    const p = document.getElementById("p").value;
    const t = document.getElementById("t").value;
    const r = document.getElementById("r").value;
    interest = (p * (0.01 * r)) / t;
    emi = ((p / t) + interest).toFixed(2);

    document.getElementById("emi").value = emi;
}