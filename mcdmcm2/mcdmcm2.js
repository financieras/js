var x,y,z,mcd,text,text2,text3,resulta;
function myFunction() {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    z = parseFloat(document.getElementById("num3").value);
    document.getElementById("calculo").style.color="#0A8A0A";
    if (isNaN(x) || isNaN(y) || x%1!==0 || y%1!==0 || x<1 || y<1 ) {
        text = "Es necesario introducir dos números válidos. El tercer valor es opcional.";
        document.getElementById("calculo").style.color="#FF0000";
				var text2 = "";
    } else {
			factorizame(x);
    	text = resulta+"<br>";
    	factorizame(y);
    	text += resulta+'<br>';
    	if (!isNaN(z) && z%1==0 && z>=1){
    		factorizame(z);
				text += resulta+"<br>";
    	}
			
			if (!isNaN(x) && !isNaN(y) && isNaN(z)){             //solo x e y
				calculaMCD(x,y);
			} else if (!isNaN(x) && !isNaN(y) && !isNaN(z)){     //intervienen x, y, z
				calculaMCD(x,y);
				calculaMCD(mcd,z);                                 //propiedad recursiva para calcular el MCD de tres números
			}
			var text2="MCD="+mcd		
    }
		document.getElementById("calculo").innerHTML = text;
		document.getElementById("calculo2").innerHTML = text2;
		document.getElementById("calculo2").style.color="blue";
	
		var text3=x+' / '+mcd+' = '+x/mcd+'<br>'+y+' / '+mcd+' = '+y/mcd+'<br>';
		if (!isNaN(z)){text3 += z+' / '+mcd+' = '+z/mcd+'<br>'}
		document.getElementById("calculo3").innerHTML = text3;
		document.getElementById("calculo3").style.color="magenta";
}

function calculaMCD(n1,n2){
	if (n2>n1){                                              //queremos que n1 sea el mayor
		var aux=n1;
		n1=n2;
		n2=aux
	}
	var a=n1;
	var b=n2;

	do {                                                     //algoritmo de Euclides
		mcd=n2;
		var resto=n1%n2;
		n1=n2;
		n2=resto;
	} while (resto!=0);
}


function factorizame(n){
	resulta=n+' = ';
	var contador=0;
	while (n%2===0) {
   		n=n/2;
   		contador++;
	}
	if (contador>1){
		resulta += 2+"<sup>"+contador+"</sup> × ";
	} else if (contador===1){
		resulta += "2 × ";
	}
	for (var i=3;i<=n;i=i+2){
		contador=0;
		while (n%i===0) {
   			n=n/i;
   			contador++;
		}
		if (contador>1){
			resulta += i+"<sup>"+contador+"</sup> × ";
		} else if (contador===1){
			resulta += i+" × ";
		}
	}
		resulta += 1;
}
