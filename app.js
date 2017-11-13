function trello(){ //para que al hacer click aparesca "algo"
//crear un boton y un input
	var container = document.getElementById("container");
	var btn = document.createElement("button");
	var input = document.createElement("input");
	var nodoText = document.createTextNode("Guardar"); //para que alla algo escrito en el boton

//atributos
	input.setAttribute("id","valor"); //para agregarle un id al input llamado valor, el cual puedo modificar en el css

	btn.appendChild(nodoText);
	container.appendChild(btn);
	container.appendChild(input);


//que el texto del input (lo que escriba) se vaya hacia abajo. 
//le tengo que dar la funcioncionalidad a boton

btn.addEventListener("click", function(){ //cada ves que haga click va a pasar algo
//tengo que guardar el valor del input
	var list = document.getElementById("valor").value; //rescando lo que esta dentro del inputo, su valor
	document.getElementById("valor").value="";
	var contiene = document.getElementById("contiene"); //sin .value porque no necesitamos su valor solo a el, al div
	var parrafo = document.createElement("p");
	var textNuevo = document.createTextNode(list); //para que el div se transforme en el parrafo y se vaya hacia abajo y se guarde el texto

	//para añadir otra tarjera (se debe crear un text area)
	var add = document.createElement("a");
	add.setAttribute("href", "#"); /*el # puede ser reemplazado por una pag)*/
	var textAdd = document.createTextNode("añadir tarjeta");

	parrafo.appendChild(textNuevo);
	contiene.appendChild(parrafo);
	add.appendChild(textAdd);
	contiene.appendChild(add);

	
	parrafo.setAttribute("id","valor"); //por si queremos cambiar el color al parrafo lo llamos en el css
	add.addEventListener("click", function(){
		//hacer un text area
		contiene.removeChild(add);

		var textarea = document.createElement("textarea");
		var addB = document.createElement("a");
		addB.setAttribute("href", "#"); /*el # puede ser reemplazado por una pag)*/
		var textAddB = document.createTextNode("añadir tarjeta");
		addB.appendChild(textAdd);
		contiene.appendChild(textarea);
		contiene.appendChild(addB);



	})
})

};