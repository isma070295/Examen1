var p = document.getElementById("pb");
var c = document.getElementById("cant");
var h = document.getElementById("cbHorario");
var check= document.getElementById("cb");
var m= document.getElementById("mensaje");

function resetear(){
	document.getElementById("form").reset();
}

function consultar(){
	var pHorario=0;
	if(h.selectedIndex=="1"){
		pHorario=0.05;
	}else{
		if(h.selectedIndex=="2"){
			pHorario=0.08;
		}else{
			if(h.selectedIndex=="3"){
				pHorario=0.12;
			}else{
				var pHorario=0;
			}
		}
	}
	var costoSeguro=(((parseInt(p.value)*(parseInt(cant.value))*(1+(parseInt(pHorario.value)))*1.05;
	if(p.value<=0){
		m.innerHTML="Ingrese Precio mayor a 0";
	}else{
		if(c.value<=0){
			m.innerHTML="Ingrese Cantidad mayor a 0";
		}else{
			if (h.selectedIndex=="0"){
				m.innerHTML="Ingrese un horario";
			}else{
				if (check.checked){
					var montoNeto=(((parseInt(p.value)*(parseInt(cant.value))
						*(1+(parseInt(pHorario.value)))
						+parseInt(costoSeguro.value);
					document.getElementById("nRes").value=montoNeto;
					var iva=montoNeto+(montoNeto*0.19);
					document.getElementById("iRes")
					.value=iva;
					var total=montoNeto+iva;
				}else{
					m.innerHTML="Ingrese Todos los datos";
				}
			}
		}
	}
}