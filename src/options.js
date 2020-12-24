chrome.storage.sync.get('globalConfig', function (data) {
	const num = (val) => +val.replace('px', '');

	let config = JSON.parse(data.globalConfig);

	document
		.getElementById('grid-col-color')
		.jscolor.fromString(config.gridColColor);

	document
		.getElementById('grid-row-color')
		.jscolor.fromString(config.gridRowColor);

	document.getElementById('container-width').value = num(config.containerWidth);
	document.getElementById('container-padding').value = num(
		config.containerPadding
	);
	document.getElementById('grid-col-gap').value = num(config.gridColGap);
	document.getElementById('grid-row-gap').value = num(config.gridRowGap);
	document.getElementById('grid-cols').value = num(config.gridCols);

	document.getElementById('inputs').addEventListener('change', (e) => {
		if (e.target.id === 'grid-col-color') {
			config.gridColColor = e.target.jscolor.toRGBAString();
		} else if (e.target.id === 'grid-row-color') {
			config.gridRowColor = e.target.jscolor.toRGBAString();
		} else if (e.target.id === 'container-width') {
			config.containerWidth = `${e.target.value}px`;
		} else if (e.target.id === 'container-padding') {
			config.containerPadding = `${e.target.value}px`;
		} else if (e.target.id === 'grid-col-gap') {
			config.gridColGap = `${e.target.value}px`;
		} else if (e.target.id === 'grid-row-gap') {
			config.gridRowGap = `${e.target.value}px`;
		} else if (e.target.id === 'grid-cols') {
			config.gridCols = e.target.value;
		}
	});

	document.getElementById('save').addEventListener('click', () => {
		console.log(config);
		chrome.storage.sync.set({
			globalConfig: JSON.stringify(config),
		});
	});
});
