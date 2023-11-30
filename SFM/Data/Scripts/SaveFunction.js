function saveToFile() {
    const customFilename = prompt('Enter a custom filename:', 'MapSave.json');

    if (customFilename !== null) {
        const starSystems = document.querySelectorAll('.star-system');

        const data = Array.from(starSystems).map(starSystem => {
            const id = starSystem.querySelector('.star-label').id;
            const discoverKey = id + '-discover';
            const surveyKey = id + '-survey';
            const outpostKey = id + '-outpost';

            const isDiscovered = localStorage.getItem(discoverKey) === 'true';
            const isSurveyed = localStorage.getItem(surveyKey) === 'true';
            const hasOutpost = localStorage.getItem(outpostKey) === 'true';

            return {
                id,
                isDiscovered,
                isSurveyed,
                hasOutpost,
            };
        });

        const jsonString = JSON.stringify(data, null, 2);
        saveDataToFile(jsonString, customFilename);
    }
}

function saveDataToFile(data, customFilename) {
    const filename = customFilename || 'MapSave.json';

    const blob = new Blob([data], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.id = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadFromFile(fileInput) {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const data = JSON.parse(e.target.result);
            updateStarLabels(data);
        };

        reader.readAsText(file);
    }
}

function updateStarLabels(data) {
    data.forEach(starSystem => {
        const { id, isDiscovered, isSurveyed, hasOutpost } = starSystem;
        const starLabel = document.getElementById(id);

        if (starLabel) {
            if (isDiscovered) {
                starLabel.style.color = "cyan";
                const storageKey = starLabel.id + "-discover";
                localStorage.setItem(storageKey, JSON.stringify(isDiscovered));
            }

            if (isSurveyed) {
                starLabel.style.color = "lime";
                const storageKey = starLabel.id + "-survey";
                localStorage.setItem(storageKey, JSON.stringify(isSurveyed));
            }

            const outpostImage = document.createElement('img');
            outpostImage.src = "Data/Textures/Icons/OutpostMarker.png";

            if (hasOutpost) {
                starLabel.appendChild(outpostImage);
                const storageKey = starLabel.id + "-outpost";
                localStorage.setItem(storageKey, JSON.stringify(true));
            } else {
                const existingOutpostImage = starLabel.querySelector('img');
                if (existingOutpostImage) {
                    existingOutpostImage.remove();
                }
            }
        }
    });
}

//text export...work another day!
/*function getStarInfoText(index) {
    const key = 'starInfoText' + index;
    return localStorage.getItem(key) || '';
}

function saveToFile() {
    const customFilename = prompt('Enter a custom filename:', 'star_systems.json');

    if (customFilename !== null) {
        const starSystems = document.querySelectorAll('.star-system');

        const data = Array.from(starSystems).map(starSystem => {
            const id = starSystem.querySelector('.star-label').id;
            const discoverKey = id + '-discover';
            const surveyKey = id + '-survey';
            const outpostKey = id + '-outpost';
            const index = id.replace('star-label', ''); // Extract index from id

            const isDiscovered = localStorage.getItem(discoverKey) === 'true';
            const isSurveyed = localStorage.getItem(surveyKey) === 'true';
            const hasOutpost = localStorage.getItem(outpostKey) === 'true';
            const starInfoText = getStarInfoText(index); // Get starInfoText

            return {
                id,
                isDiscovered,
                isSurveyed,
                hasOutpost,
                starInfoText, // Include starInfoText in the exported data
            };
        });

        const jsonString = JSON.stringify(data, null, 2);
        saveDataToFile(jsonString, customFilename);
    }
}

function saveDataToFile(data, customFilename) {
    const filename = customFilename || 'star_systems.json';

    const blob = new Blob([data], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.id = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadFromFile(fileInput) {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const data = JSON.parse(e.target.result);
            updateStarLabels(data);
        };

        reader.readAsText(file);
    }
}

function updateStarLabels(data) {
    data.forEach(starSystem => {
        const { id, isDiscovered, isSurveyed, hasOutpost, starInfoText } = starSystem;
        const starLabel = document.getElementById(id);

        if (starLabel) {
            if (isDiscovered) {
                starLabel.style.color = "cyan";
                const storageKey = starLabel.id + "-discover";
                localStorage.setItem(storageKey, JSON.stringify(isDiscovered));
            }

            if (isSurveyed) {
                starLabel.style.color = "lime";
                const storageKey = starLabel.id + "-survey";
                localStorage.setItem(storageKey, JSON.stringify(isSurveyed));
            }

            const outpostImage = document.createElement('img');
            outpostImage.src = "Data/Textures/Icons/OutpostMarker.png";

            if (hasOutpost) {
                starLabel.appendChild(outpostImage);
                const storageKey = starLabel.id + "-outpost";
                localStorage.setItem(storageKey, JSON.stringify(true));
            } else {
                const existingOutpostImage = starLabel.querySelector('img');
                if (existingOutpostImage) {
                    existingOutpostImage.remove();
                }
            }

            // Update starInfoText
            const index = id.replace('star-label', '');
            const starInfoTextKey = 'starInfoText' + index;
            localStorage.setItem(starInfoTextKey, JSON.stringify(starInfoText));
        }
    });
}*/
