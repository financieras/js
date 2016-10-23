console.log('Máximo común divisor (MCD) y mínimo comúm múltiplo (mcm)');
console.log('Dados dos números calcular el MCD y el mcm');
do{  
	var n1 = prompt("Dime el primer número (de 1 a un billón)", 9805035240);
}while(isNaN(n1) || n1> 1000000000000 || n1< 1 || n1%1!==0);
do{  
	var n2 = prompt("Dime el segundo número (de 1 a un billón)", 65418210);
}while(isNaN(n2) || n2> 1000000000000 || n2< 1 || n2%1!==0);

var fila=0;
var A = new Array(12);
	for(var k = 1; k <= 3; k++) {
		A[k] = new Array(3);
	}

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
	if (contador>0){
		A[3][1]=2;
		A[j][1]=contador;
		if (A[1][1] === undefined) {A[1][1]=0}
		if (A[2][1] === undefined) {A[2][1]=0}
	}
	if (contador>1){
		texto += 2+"^"+contador+"x";
	} else if (contador===1){
		texto += "2x";
	}
	
	for (var i=3;i<=n;i=i+2){
		contador=0;
		while (n%i===0) {
    		n=n/i;
    		contador++;
		}
		if (contador>0){
			if (j===1){
				fila++;
				A[3][fila]=i;
				A[1][fila]=contador;
				if (A[1][fila] === undefined) {A[1][fila]=0}
				if (A[2][fila] === undefined) {A[2][fila]=0}
			} else if (j===2){
				var repe=false;
				for (p=1;p<=fila;p++){
					if (i===A[3][p]){
						A[2][p]=contador;
						repe=true;
						break;
					}
				}
				if (!(repe)){
					fila++;
					A[3][fila]=i;
					A[2][fila]=contador;
					if (A[1][fila] === undefined) {A[1][fila]=0}
					if (A[2][fila] === undefined) {A[2][fila]=0}
				}
			}
		}
		if (contador>1){
			texto += i+"^"+contador+"x";
		} else if (contador===1){
			texto += i+"x";
		}
	}
	
	texto += 1;
	console.log(texto);
}

for(s=1;s<=fila;s++){		
	console.log ("fila "+s+"="+A[3][s]+", "+A[1][s]+", "+A[2][s]);
}
