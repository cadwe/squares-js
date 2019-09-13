import {makeHiden} from './generateTable.js';
 
export function onButton(table){
	table.onmouseover = table.onmouseout=changePositionButtonMinus;
	table.onclick = checkWichButtonPresed;
	let button3=null;
	let button4=null;
	function checkWichButtonPresed(){
		let target = event.target;
		switch(target.className) {
			case 'button1':
				target.removeAttribute('class');
				addColum(table);
				makeHiden(table);
				changeButton34(target, table)
				break;

			case 'button2':
				target.removeAttribute('class');
				addRow(table)
				makeHiden(table)
				changeButton34(target, table)
				break;	
			case 'button3':
				sqr.lastChild.remove();	
				makeHiden(table)
				button3.removeAttribute('class');
				break;
			case 'button4':
				removeColum(table);
				makeHiden(table);
				button4.removeAttribute('class');				
				break;
			default:
				break;
	}





}

	function changePositionButtonMinus(event){
		let target = event.target;

		if(event.type == 'mouseover' && ( target.parentNode==table.firstChild || target==target.parentNode.firstChild)){
			return;
		}

		if(target!=table && event.type == 'mouseover' && target.parentNode!=table.lastChild && target!=target.parentNode.lastChild){
			makeHiden(table)		
			if(button3 && button4){
				button3.removeAttribute('class');
				button4.removeAttribute('class');
			}
			table.rows[0].cells[target.cellIndex].className = "button3";
			table.rows[target.parentNode.rowIndex].cells[0].className = "button4";
			table.rows[0].cells[target.cellIndex].style.opacity = 100;
			table.rows[target.parentNode.rowIndex].cells[0].style.opacity = 100;
			button3=table.rows[0].cells[target.cellIndex];
			button4=table.rows[target.parentNode.rowIndex].cells[0];
		}
		if(event.type == 'mouseout'){
				target=event.target.closest('table')
				if(button3 && button4 && event.relatedTarget.closest('table')!=document.getElementById("sqr")){
					button3.removeAttribute('class');
					button4.removeAttribute('class');
					button3.style.opacity = 0;
					button4.style.opacity = 0;
				}
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



function changeButton34(target, table){
				table.rows[0].cells[target.cellIndex].className = "button3";
				table.rows[target.parentNode.rowIndex].cells[0].className = "button4";
				table.rows[0].cells[target.cellIndex].style.opacity = 100;
				table.rows[target.parentNode.rowIndex].cells[0].style.opacity = 100;
				button3=table.rows[0].cells[target.cellIndex];
				button4=table.rows[target.parentNode.rowIndex].cells[0];
}

