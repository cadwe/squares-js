export function generateTable(idInCreate){

	let numbRows=5; // tr
	let numbColums=5; //td
	let table = document.createElement('table');
	table.id = "sqr";
	idInCreate.append(table);	
	for (var i = 0; i < numbRows; i++) {
		table.append(document.createElement('tr'));    
		 for (var j = 0; j < numbColums; j++) {    	
	    	table.rows[i].insertAdjacentHTML('beforeend', '<td></td>');
	    }
	}
	makeHiden(table);
}


export function makeHiden(table){
	table.rows[1].lastChild.className = "button1";
	table.rows[table.rows.length-1].cells[1].className = "button2";

	for (var i = 0; i <table.rows.length; i++) { 
		if(i!=1){
			table.rows[i].cells[table.rows[i].cells.length-1].style.opacity = 0;
		}
		table.rows[i].firstChild.style.opacity = 0;

	}
	for (var j = 0; j < table.rows[0].cells.length - 1; j++) {	
		if(j!=1){	
			table.lastChild.cells[j].style.opacity = 0;
		}
		table.firstChild.cells[j].style.opacity = 0;
	}
}
