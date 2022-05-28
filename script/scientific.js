function output(x, y) {

    var k = document.getElementById(x).value;

    try {

        document.getElementById(y).innerHTML = math.evaluate(k);
        document.getElementById(y).style.color = "green";
    } catch (err) {
        error();
    }
    console.log(math.evaluate(k));

}

function error() {
    document.getElementById("result").value = "Invalid Expression";
    document.getElementById("result").style.color = "red";
    return;
}