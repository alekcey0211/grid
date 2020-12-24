chrome.storage.sync.get(`config-${window.location.host}`, function (data) {
	const config = JSON.parse(data[`config-${window.location.host}`]);
	const grid = document.querySelector('.grid-d1ec314162654fbea4265e5d5054d362');
	if (!grid) {
		return;
	}

	grid.style.setProperty('--container-width', config.containerWidth);
	grid.style.setProperty('--container-padding', config.containerPadding);
	grid.style.setProperty('--grid-col-color', config.gridColColor);
	grid.style.setProperty('--grid-row-color', config.gridRowColor);
	grid.style.setProperty('--grid-gap-col-color', config.gridGapColColor);
	grid.style.setProperty('--grid-gap-row-color', config.gridGapRowColor);
	grid.style.setProperty('--grid-col-gap', config.gridColGap);
	grid.style.setProperty('--grid-row-gap', config.gridRowGap);
	grid.style.setProperty('--grid-cols', config.gridCols);
	grid.style.setProperty('--grid-row-height', config.gridRowHeight);
});
