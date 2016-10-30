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
    //document.getElementById("calculaMCDmcm").innerHTML = text;
    var col=document.getElementById("calculaMCDmcm");
    //col.style.color="#FF0000";
}
