const http = require("https");

const options = {
    "method": "GET",
    "hostname": "evaluate-expression.p.rapidapi.com",
    "port": null,
    "path": "/?expression=67-11(63.89)",
    "headers": {
        "X-RapidAPI-Host": "evaluate-expression.p.rapidapi.com",
        "X-RapidAPI-Key": "fffdeffd94msh665c25c03c42d9ep186373jsn3e8d579657bb",
        "useQueryString": true
    }
};

const req = http.request(options, function(res) {
    const chunks = [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    res.on("end", function() {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();