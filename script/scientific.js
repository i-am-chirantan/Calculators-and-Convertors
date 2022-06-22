const { isNull } = require("mathjs");

function output(x, y) {

    var k = document.getElementById(x).value;
    try {

        document.getElementById(y).value = math.evaluate(k);
        document.getElementById(y).style.color = "blue";
    } catch (err) {
        error(y);
    }
    console.log(math.evaluate(k));

}

function error(y) {
    document.getElementById(y).value = "Invalid Expression";
    document.getElementById(y).style.color = "red";
    return;
}