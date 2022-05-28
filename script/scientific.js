function output() {

    var k = document.getElementById("screen").value;

    try {

        document.getElementById('result').innerHTML = math.evaluate(k);
        document.getElementById('result').style.color = "green";
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