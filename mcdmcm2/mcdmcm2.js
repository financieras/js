function myFunction() {
    var x,y,z,MCD,mcm,text;

    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    z = document.getElementById("num3").value;
    if (isNaN(x) || isNaN(y)) {
        text = "Es necesarios introducir dos números válidos. El tercer valor es opcional.";
    } else {
        suma=parseFloat(x)+parseFloat(y)+parseFloat(z);
        text= suma;
    }
    document.getElementById("calculaMCDmcm").innerHTML = text;
    document.getElementById("calculaMCDmcm").style.color = "blue";
}
