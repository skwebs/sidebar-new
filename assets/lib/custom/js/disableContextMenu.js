/*
disable context menu 

(i)with alert
if (document.addEventListener) { // IE >= 9; other browsers
	document.addEventListener('contextmenu', function(e) {
		alert("Right click disabled."); //here you draw your own menu
		e.preventDefault();
	}, false);
} else { // IE < 9
	document.attachEvent('oncontextmenu', function() {
		alert("Right click disabled.");
		window.event.returnValue = false;
	});
}

or,
------------------------------------------------------------------------------
(ii) without alert
document.addEventListener('contextmenu', event => event.preventDefault());
*/
