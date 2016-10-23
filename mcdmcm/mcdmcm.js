document.write('<h1>Máximo común divisor (MCD) y mínimo comúm múltiplo (mcm)</h1>');
document.write('<h2>Dados dos números calcular el MCD y el mcm</h2>');
do{
	var n1 = prompt("Dime el primer número (de 1 a un billón)", 9805035240);
}while(isNaN(n1) || n1> 1000000000000 || n1< 1 || n1%1!==0);
do{
	var n2 = prompt("Dime el segundo número (de 1 a un billón)", 65418210);
}while(isNaN(n2) || n2> 1000000000000 || n2< 1 || n2%1!==0);

for (var j=1;j<=2;j++){
	if (j===1){
		n=n1;
	} else if (j===2) {
		n=n2;
	}
	var texto=n+'=';
	
	var contador=0;
	while (n%2===0) {
    	n=n/2;
    	contador++;
	}
	if (contador>1){
		texto += 2+"<sup>"+contador+"</sup> x ";
	} else if (contador===1){
		texto += "2x";
	}
	
	for (var i=3;i<=n;i=i+2){
		contador=0;
		while (n%i===0) {
    		n=n/i;
    		contador++;
		}
		if (contador>1){
			texto += i+"<sup>"+contador+"</sup> x ";
		} else if (contador===1){
			texto += i+"x";
		}
	}
	
	texto += 1;
	document.write(texto+'<br>');
}
