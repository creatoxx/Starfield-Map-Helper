document.addEventListener("keydown", function (event) {
	if (event.key === 'F11') {
		event.preventDefault();
	} else if (event.key === 'F1' || event.key === 'F3' || event.key === 'F6' || event.key === 'F7' || event.key === 'F10') {
		event.preventDefault();
	}
});		

document.addEventListener("wheel", function(event) {
	if (event.ctrlKey) {
		event.preventDefault(); 
	}
}, { passive: false });