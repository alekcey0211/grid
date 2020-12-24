chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	document.getElementById('toggleGrid').addEventListener('click', () => {
		chrome.tabs.executeScript(tabs[0].id, { file: 'tabs/toggle.js' });
	});

	const getHost = (url) => url.split('/')[2];
	const host = getHost(tabs[0].url);
	const hostConfig = `config-${host}`;

	chrome.storage.sync.get(['globalConfig', hostConfig], function (data) {
		const num = (val) => +val.replace('px', '');
		const globalConfig = JSON.parse(data.globalConfig);
		const config = data[hostConfig]
			? JSON.parse(data[hostConfig])
			: globalConfig;

		document
			.getElementById('grid-col-color')
			.jscolor.fromString(config.gridColColor);

		document
			.getElementById('grid-row-color')
			.jscolor.fromString(config.gridRowColor);

		document.getElementById('container-width').value = num(
			config.containerWidth
		);
		document.getElementById('container-padding').value = num(
			config.containerPadding ?? globalConfig.containerPadding
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
			chrome.storage.sync.set({
				[hostConfig]: JSON.stringify(config),
			});
			chrome.tabs.executeScript(tabs[0].id, { file: 'tabs/refresh.js' });
		});

		chrome.commands.getAll((commands) => {
			document.getElementById('toggleGrid').title = commands.find(
				(x) => x.name === 'toggle-feature-foo'
			).shortcut;
			document.getElementById('toggleGrid__hint').innerText = commands.find(
				(x) => x.name === 'toggle-feature-foo'
			).shortcut;
		});
	});
});
