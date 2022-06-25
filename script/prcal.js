function prcal() {
    sig = document.getElementById("sigf").value;
    var a = new Array(9),
        b = new Array(9);
    for (i = 1; i <= 8; i++) {
        a[i] = document.getElementById("a" + i).value;
        b[i] = document.getElementById("b" + i).value;
        if (a[i] == "") {
            a[i] = 0;
        }
        if (b[i] == "") {
            b[i] = 0;
        }
        document.getElementById("outa" + i).value = a[i];
        document.getElementById("outb" + i).value = b[i];
    }

    for (var i = 1; i <= 8; i++) {
        x = document.getElementById("outa" + i).value;
        y = document.getElementById("outb" + i).value;
        if (x == 0 || y == 0) {
            document.getElementById("outc" + i).value = "";
            continue;
        }
        document.getElementById("outc" + i).value = indec(x, y);
    }


    //Calculate last table
    net_income_a = document.getElementById("outa1").value;
    total_assets_a = document.getElementById("outa2").value;
    share_holders_a = document.getElementById("outa3").value;
    gross_profit_a = document.getElementById("outa4").value;
    sales_a = document.getElementById("outa5").value;
    operating_profit_a = document.getElementById("outa6").value;
    common_stock_a = document.getElementById("outa7").value;
    market_price_a = document.getElementById("outa8").value;

    net_income_b = document.getElementById("outb1").value;
    total_assets_b = document.getElementById("outb2").value;
    share_holders_b = document.getElementById("outb3").value;
    gross_profit_b = document.getElementById("outb4").value;
    sales_b = document.getElementById("outb5").value;
    operating_profit_b = document.getElementById("outb6").value;
    common_stock_b = document.getElementById("outb7").value;
    market_price_b = document.getElementById("outb8").value;
    // Calculate return assets
    document.getElementById("resa1").value = (net_income_a / total_assets_a).toPrecision(sig);
    document.getElementById("resb1").value = (net_income_b / total_assets_b).toPrecision(sig);

    return_assets_a = document.getElementById("resa1").value;
    return_assets_b = document.getElementById("resb1").value;
    document.getElementById("resc1").value = (indec(return_assets_a, return_assets_b)).toPrecision(sig);

    // Calculate return equity
    document.getElementById("resa2").value = (net_income_a / share_holders_a).toPrecision(sig);
    document.getElementById("resb2").value = (net_income_b / share_holders_b).toPrecision(sig);

    return_equity_a = document.getElementById("resa2").value;
    return_equity_b = document.getElementById("resb2").value;
    document.getElementById("resc2").value = (indec(return_equity_a, return_equity_b)).toPrecision(sig);

    // Calculate gross profit margin
    document.getElementById("resa3").value = (gross_profit_a / sales_a).toPrecision(sig);
    document.getElementById("resb3").value = (gross_profit_b / sales_b).toPrecision(sig);

    gross_profit_margin_a = document.getElementById("resa3").value;
    gross_profit_margin_b = document.getElementById("resb3").value;
    document.getElementById("resc3").value = (indec(gross_profit_margin_a, gross_profit_margin_b)).toPrecision(sig);

    // Calculate operating profit margin
    document.getElementById("resa4").value = (operating_profit_a / sales_a).toPrecision(sig);
    document.getElementById("resb4").value = (operating_profit_b / sales_b).toPrecision(sig);

    operating_profit_margin_a = document.getElementById("resa4").value;
    operating_profit_margin_b = document.getElementById("resb4").value;
    document.getElementById("resc4").value = (indec(operating_profit_margin_a, operating_profit_margin_b)).toPrecision(sig);

    // Calculate net profit margin
    document.getElementById("resa5").value = (net_income_a / sales_a).toPrecision(sig);
    document.getElementById("resb5").value = (net_income_b / sales_b).toPrecision(sig);

    net_profit_margin_a = document.getElementById("resa5").value;
    net_profit_margin_b = document.getElementById("resb5").value;
    document.getElementById("resc5").value = (indec(net_profit_margin_a, net_profit_margin_b)).toPrecision(sig);

    // Calculate earnings per share
    document.getElementById("resa6").value = (net_income_a / common_stock_a).toPrecision(sig);
    document.getElementById("resb6").value = (net_income_b / common_stock_b).toPrecision(sig);

    earnings_per_share_a = document.getElementById("resa6").value;
    earnings_per_share_b = document.getElementById("resb6").value;
    document.getElementById("resc6").value = (indec(earnings_per_share_a, earnings_per_share_b)).toPrecision(sig);

    //Price/Earnings Ratio

    document.getElementById("resa7").value = (market_price_a / earnings_per_share_a).toPrecision(sig);
    document.getElementById("resb7").value = (market_price_b / earnings_per_share_b).toPrecision(sig);

    price_earnings_ratio_a = document.getElementById("resa7").value;
    price_earnings_ratio_b = document.getElementById("resb7").value;
    document.getElementById("resc7").value = (indec(price_earnings_ratio_a, price_earnings_ratio_b)).toPrecision(sig);
}

function indec(a, b) {

    x = ((a - b) / a) * 100;

    a = parseFloat(a).toFixed(sig);
    b = parseFloat(b).toFixed(sig);

    str = Math.abs(x.toPrecision(sig)) + "%";
    if (a > b) {
        str += " decrease";
    } else if (a < b) {
        str += " increase";
    } else {
        str = "no change";
    }
    return str;

}