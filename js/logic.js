	//CAPTURA DE ELEMENTOS.

    

    //EVENT LISTENERS PARA BOTONES DE TRANSFERIR.
    document.querySelector('#btnTransferirB').addEventListener('click', function(){
			    var saldoA = Number(document.querySelector('#txtSaldoA').value),
					saldoB = Number(document.querySelector('#txtSaldoB').value),
					montoA = Number(document.querySelector('#txtMontoA').value),
					montoB = Number(document.querySelector('#txtMontoB').value);
					    
			    if(saldoA < montoA || montoA === ''){
			    	document.querySelector('#txtMontoA').classList.add('error');
			    } else {
			    	document.querySelector('#txtSaldoA').value = (saldoA - montoA);
					document.querySelector('#txtSaldoB').value = (montoA + saldoB);
					document.querySelector('#txtMontoA').value = '';
					document.querySelector('#txtMontoA').classList.remove('error');
			    }
    });

    document.querySelector('#btnTransferirA').addEventListener('click', function(){
    		var saldoA = Number(document.querySelector('#txtSaldoA').value),
			    saldoB = Number(document.querySelector('#txtSaldoB').value),
			    montoA = Number(document.querySelector('#txtMontoA').value),
			    montoB = Number(document.querySelector('#txtMontoB').value);

    		if(saldoB < montoB || montoB === '') {
			    	document.querySelector('#txtMontoB').classList.add('error');
    		} else {
    			document.querySelector('#txtSaldoB').value = (saldoB - montoB);
			    document.querySelector('#txtSaldoA').value = (montoB + saldoA);
			    document.querySelector('#txtMontoB').value = '';
			    document.querySelector('#txtMontoB').classList.remove('error');
    		}
    });




