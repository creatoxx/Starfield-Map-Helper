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