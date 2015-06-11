function mostrarMensaje(){
			var person = prompt("Ingresa tu nombre", "Harry Potter");
		    
		    if (person != null) {
		        document.getElementById("demo").innerHTML =
		        "Hola " + person + "! todo bien?";
		    }
		};