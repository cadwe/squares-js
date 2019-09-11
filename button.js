import {makeHiden} from './generateTable.js';
 
export function onButton(table){
	table.onmouseover = changePositionButtonMinus;
	table.onclick = checkWichButtonPresed;
	function checkWichButtonPresed(){
		let target = event.target;
		switch(target.className) {
			case 'button1':
				target.removeAttribute('class');
				addColum(table);
				makeHiden(table);
				break;
			case 'button2':
				target.removeAttribute('class');
				addRow(table)
				makeHiden(table)
				break;	
			case 'button3':
				sqr.lastChild.remove();	
				makeHiden(table)
				break;
			case 'button4':
				removeColum(table);
				makeHiden(table);
				break;
			default:
				break;
		}
	}

	function changePositionButtonMinus(){
		let target = event.target;		
		if(target!=table){
			makeHiden(table)		
			table.rows[0].cells[target.cellIndex].className = "button3";
			table.rows[target.parentNode.rowIndex].cells[0].className = "button4";
			table.rows[0].cells[target.cellIndex].style.opacity = 100;
			table.rows[target.parentNode.rowIndex].cells[0].style.opacity = 100;
		}
	}
}


function addColum(table){
	for (var i = 0; i <table.rows.length; i++) {
		table.rows[i].lastChild.style.opacity = 100;
	}
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].insertAdjacentHTML('beforeend', '<td></td>');
	}
}

function addRow(table){
	for (var i = 0; i <table.lastChild.cells.length; i++) {
		table.lastChild.cells[i].style.opacity = 100;
	}
	sqr.append(document.createElement('tr'));
	for (var j = 0; j < table.rows[1].cells.length; j++) {  	
		table.rows[table.rows.length-1].insertAdjacentHTML('beforeend', '<td></td>');			   
	}
}

function removeColum(table){
	for (var i = 0; i < sqr.rows.length; i++) {
		table.rows[i].lastChild.remove();
	 }
}
