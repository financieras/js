do{
	var n1 = parseInt(prompt("Dime el primer número (de 1 a un billón)", 300));
}while(isNaN(n1) || n1> 1000000000000 || n1< 1 || n1%1!==0);
do{
	var n2 = parseInt(prompt("Dime el segundo número (de 1 a un billón)", 33880));
}while(isNaN(n2) || n2> 1000000000000 || n2< 1 || n2%1!==0);


if (n2>n1){                                    //queremos que n1 sea el mayor
	var z=n1;
	n1=n2;
	n2=z
}
var a=n1;
var b=n2;

for (var j=1;j<=2;j++){
	if (j===1){
		n=n1;
	} else if (j===2) {
		n=n2;
	}
	var texto=n+' = ';
	
	var contador=0;
	while (n%2===0) {
    	n=n/2;
    	contador++;
	}
	if (contador>1){
		texto += 2+"<sup>"+contador+"</sup> × ";
	} else if (contador===1){
		texto += "2 × ";
	}
	
	for (var i=3;i<=n;i=i+2){
		contador=0;
		while (n%i===0) {
    		n=n/i;
    		contador++;
		}
		if (contador>1){
			texto += i+"<sup>"+contador+"</sup> × ";
		} else if (contador===1){
			texto += i+" × ";
		}
	}
	
	texto += 1;
	document.write(texto+'<br>');
}

do {                                                    //algoritmo de Euclides
	var mcd=n2;
	var resto=n1%n2;
	n1=n2;
	n2=resto;
} while (resto!=0);

document.write('El MCD es '+mcd+'<br>');
document.write('El mcm es '+a*b/mcd+'<br>');
if (mcd>1){
	document.write('La fracción se puede simplificar:<br>'+a+' / '+b+' = '+a/mcd+' / '+b/mcd);
} else if (mcd===1){
	document.write('La fracción siguiente no se puede simplificar:<br>'+a+' / '+b);
}
