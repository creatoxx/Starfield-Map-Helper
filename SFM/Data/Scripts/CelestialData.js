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
		celestialData.textContent = "";
	});
});

function showInfo(bodyID) {
	const celestialBodyId = bodyID.name;

	/*if (dataSources[celestialBodyId]) {
		const dataFilePath = dataSources[celestialBodyId];
		celestialData.data = dataFilePath;
	} else {
		celestialData.textContent = "";	
	}*/		
	
	if (celestialBodyId) {
		celestialData.textContent = "Name: " + celestialBodyId;
	} else {
		celestialData.textContent = "";		
	}
}

function openInfo(bodyID) {
	if (bodyID) {
		var url = 'https://starfieldwiki.net/wiki/Starfield:' + bodyID.id;
		var leftOffset = (window.innerWidth - 1440) / 2;
		var topOffset = (window.innerHeight - 810) / 2;
		var newWindow = window.open(url, 'newWindow', 'width=1440,height=810,' + 'left=' + leftOffset + ',top=' + topOffset + ',resizable=no,scrollbars=no,status=no');
	}
}

function openWiki(labelID) {
	if (labelID) {
		var url = 'https://en.wikipedia.org/wiki/' + labelID;
		var leftOffset = (window.innerWidth - 1440) / 2;
		var topOffset = (window.innerHeight - 810) / 2;
		var newWindow = window.open(url, 'newWindow', 'width=1440,height=810,' + 'left=' + leftOffset + ',top=' + topOffset + ',resizable=no,scrollbars=no,status=no');
	}
}