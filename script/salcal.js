function salcal() {
    hr = document.getElementById("hours").value;
    wage = document.getElementById("wage").value;
    if (hr == "" || wage == "") {
        alert("Fields are empty");
    }
    hr = parseInt(hr);
    wage = parseInt(wage);

    amt = (wage * hr * 52).toFixed(2);
    document.getElementById("sal").value = "Salary (in Rupees) = " + amt;
}