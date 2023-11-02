const celestialData = document.getElementById('celestialData');

const celestialBodies = document.querySelectorAll(".celestial-body img");

celestialBodies.forEach(function(img) {
	img.addEventListener('mouseover', function() {
		img.style.boxShadow = '0 0 10px 2px cyan';
		img.style.borderRadius = '50%';
		showInfo(img);
	});

	img.addEventListener('mouseout', function() {
		img.style.boxShadow = 'none';
		img.style.borderRadius = '0';
	});
});

function showInfo(bodyID) {
	const celestialBodyId = bodyID.id;

	if (dataSources[celestialBodyId]) {
		const dataFilePath = dataSources[celestialBodyId];
		celestialData.data = dataFilePath;
	} else {
		celestialData.data = "";
	}			
}	

function openInfo(bodyID) {
	if (bodyID) {
		var url = 'https://starfieldwiki.net/wiki/Starfield:' + bodyID.id;
		var leftOffset = (window.innerWidth - 1024) / 2;
		var topOffset = (window.innerHeight - 768) / 2;
		var newWindow = window.open(url, 'newWindow', 'width=1024,height=768,' + 'left=' + leftOffset + ',top=' + topOffset + ',resizable=no,scrollbars=no,status=no');
	}
}