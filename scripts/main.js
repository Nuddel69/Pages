function knapp()
{
    document.getElementById("pyScript") = "<py-script>print(\"Hello World!\")<\/py-script>";
                    
}

function aritmetiskRekke()
{
    var a_1 = document.getElementById("a_1").value;
    var d = document.getElementById("diff").value;
    var n = document.getElementById("nLim").value;

    if(a_1.length == 0)
    {
        alert("A1 missing");
    }
    else if(d.length == 0)
    {
        alert("d missing");
    }
    else if(n.length == 0)
    {
        alert("n missing");
    }
    else {
        document.getElementById("aritOutput").innerHTML = "<p>" + eval((a_1 + (a_1 + (n-1)*d))/2 * n) + "</p>";
    }
}