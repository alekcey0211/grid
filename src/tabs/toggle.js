const hostConfig = `config-${window.location.host}`;
chrome.storage.sync.get(['globalConfig', hostConfig], function (data) {
	const globalConfig = JSON.parse(data.globalConfig);
	const config = data[hostConfig] ? JSON.parse(data[hostConfig]) : globalConfig;

	const appendGrid = () => {
		const div = document.createElement('div');
		div.classList.add('grid-d1ec314162654fbea4265e5d5054d362');
		const styleElem = div.appendChild(document.createElement('style'));
		styleElem.innerHTML = `.grid-d1ec314162654fbea4265e5d5054d362::after {height:${document.body.clientHeight}px;}`;
		div.style.setProperty('--container-width', config.containerWidth);
		div.style.setProperty('--container-padding', config.containerPadding);
		div.style.setProperty('--grid-col-color', config.gridColColor);
		div.style.setProperty('--grid-row-color', config.gridRowColor);
		div.style.setProperty('--grid-gap-col-color', config.gridGapColColor);
		div.style.setProperty('--grid-gap-row-color', config.gridGapRowColor);
		div.style.setProperty('--grid-col-gap', config.gridColGap);
		div.style.setProperty('--grid-row-gap', config.gridRowGap);
		div.style.setProperty('--grid-cols', config.gridCols);
		div.style.setProperty('--grid-row-height', config.gridRowHeight);
		document.body.appendChild(div);
	};

	if (document.querySelector('.grid-d1ec314162654fbea4265e5d5054d362')) {
		document.querySelector('.grid-d1ec314162654fbea4265e5d5054d362').remove();
		config.on = false;
	} else {
		appendGrid();
		config.on = true;
	}

	chrome.storage.sync.set({
		[hostConfig]: JSON.stringify(config),
	});
});
