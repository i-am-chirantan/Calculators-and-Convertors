function output() {
    var input = document.getElementById("inputnos").value;
    data = validity(input);
    console.log(data);
    if (data == "Invalid") {
        return;
    }
    var res = mean(data);
    document.getElementById("mean").innerHTML = res;

    res = median(data);
    document.getElementById("median").innerHTML = res;

    res = mode(data);
    document.getElementById("mode").innerHTML = res;

    res = standard_deviation(data);
    document.getElementById("sd").innerHTML = res;

    res = variance(data);
    document.getElementById("vari").innerHTML = res;
}

function validity(input) {
    var data = input.split(",");
    if (data.length < 2) {
        alert("Please enter at least two numbers");
        console.log("Please enter at least two numbers");
        return "Invalid";
    }
    for (i = 0; i < data.length; i++) {
        if (isNaN(data[i])) {
            alert("Please enter valid numbers");
            console.log("Please enter valid numbers");
            return "Invalid";
        } else {
            data[i] = parseInt(data[i]);
        }
    }
    return data;
}

function mean(data) {
    var sum = 0;
    for (i = 0; i < data.length; i++) {
        sum += data[i];
    }
    var mean = sum / data.length;
    return mean;
}

function median(data) {
    var median = 0;
    data.sort(function(a, b) {
        return a - b;
    });
    if (data.length % 2 == 0) {
        median = (data[data.length / 2] + data[data.length / 2 - 1]) / 2;
    } else {
        median = data[(data.length - 1) / 2];
    }
    return median;
}

function mode(data) {
    var mode = 0;
    var count = 0;
    var max = 0;
    for (i = 0; i < data.length; i++) {
        count = 0;
        for (j = 0; j < data.length; j++) {
            if (data[i] == data[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            mode = data[i];
        }
    }
    return mode;
}

function standard_deviation(data) {
    var sum = 0;
    for (i = 0; i < data.length; i++) {
        sum += Math.pow(data[i] - mean(data), 2);
    }
    var sd = Math.sqrt(sum / data.length);
    return sd;
}

function variance(data) {
    var sum = 0;
    for (i = 0; i < data.length; i++) {
        sum += Math.pow(data[i] - mean(data), 2);
    }
    var varience = sum / data.length;
    return varience;
}