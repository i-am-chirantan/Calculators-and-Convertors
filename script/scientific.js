function output() {

    var k = document.getElementById("screen").value;
    k = k.replace('+', '%2B');
    /*S

    if (k.length == 0) {
        document.getElementById("result").value = "";
        return;
    }
    k = k.replace(/%/g, "*0.01*");
    /*  if (k.indexOf("/0") != -1) {
         error();
         return;
     }
    validparen(k);
    trimoper(k.charAt(k.length - 1));
    trimoper(k.charAt(0));
    endwithnum(k);
     */

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'evaluate-expression.p.rapidapi.com',
            'X-RapidAPI-Key': 'fffdeffd94msh665c25c03c42d9ep186373jsn3e8d579657bb'
        }
    };
    var url = 'https://evaluate-expression.p.rapidapi.com/?expression='.concat(k);
    fetch(url, options, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = data;
            document.getElementById('result').style.color = "purple";
            console.log(url);
        });
}


function trimoper(pos) {
    switch (pos) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
        case '^':
            error("green");
    }
    return;
}

function validparen(str) {
    var stack = [];
    var i;
    for (i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            stack.push(str[i]);
        } else if (str[i] == ')') {
            if (stack.length == 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length != 0) {
        error("blue");
        return;
    }
}

function endwithnum(str) {
    if (isNaN(str.charAt(str.length - 1))) {
        error("violet");
        return;
    }
}

function error(colour) {
    document.getElementById("result").value = "Invalid Expression";
    document.getElementById("result").style.color = colour;
    return;
}