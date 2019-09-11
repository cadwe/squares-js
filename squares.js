import {generateTable} from './generateTable.js';
import {makeHiden} from './generateTable.js';
import {onButton} from './button.js'

(function(){
	let elementsqr=document.getElementById("sqrs");
	generateTable(elementsqr);
	onButton(document.getElementById("sqr"));
})();

