

    // toon values die aangeklikt worden in de 'uitkomst' input.
    function nmr(val){
        document.getElementById('uitkomst').value+=val;
    }

    function eqn(){

        var value1= document.getElementById('uitkomst').value;

        var res = eval(value1);

        document.getElementById('res').value=res;
    }

    function clrall(){
        document.getElementById('uitkomst').value="";
        document.getElementById('res').value="0";
    }

function back() {
    var value = document.getElementById("uitkomst").value;
    document.getElementById("uitkomst").value = value.substr(0, value.length - 1);
}